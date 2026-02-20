/**
 * 长任务监控
 *
 * 功能特性：
 * - 监控阻塞主线程超过 50ms 的任务
 * - 长任务统计和 TBT 计算
 */

import { createPerformanceObserver } from '../observer'
import { supportEntryType } from '../supportPerformanceObserver'
import { ENTRY_TYPE } from '../WebVitalsMonitor/interface'
import {
  DEFAULT_LONG_TASK_THRESHOLD,
  type LongTaskCallback,
  type LongTaskMetrics,
  type LongTaskMonitorInstance,
  type LongTaskStats,
  type ObserveLongTaskOptions,
  type PerformanceLongTaskTimingExt,
  type StopListening,
  type TaskAttribution,
  type TaskAttributionTimingExt,
} from './interface'

/**
 * 长任务观察器
 *
 * 监控阻塞主线程超过指定阈值的任务，提供统计和 TBT 计算能力。
 */
export default class LongTaskMonitor implements LongTaskMonitorInstance {
  private longTaskEntries: LongTaskMetrics[] = []
  private stopObserver: StopListening | null = null

  /** 解析长任务条目 */
  private parseLongTaskEntry = (
    entry: PerformanceLongTaskTimingExt
  ): LongTaskMetrics => {
    const attribution: TaskAttribution[] = (entry.attribution || []).map(
      (attr: TaskAttributionTimingExt) => ({
        containerType: attr.containerType,
        containerId: attr.containerId,
        containerName: attr.containerName,
        containerSrc: attr.containerSrc,
      })
    )

    return {
      name: entry.name,
      startTime: entry.startTime,
      duration: entry.duration,
      attribution,
    }
  }

  /** 处理长任务条目 */
  private handleEntry = (
    entry: PerformanceLongTaskTimingExt,
    threshold: number,
    callback?: LongTaskCallback
  ): void => {
    if (entry.duration < threshold) return

    const task = this.parseLongTaskEntry(entry)
    this.longTaskEntries.push(task)
    callback?.(task)
  }

  /** 上报已存在的长任务 */
  private reportExistingEntries = (
    threshold: number,
    callback: LongTaskCallback
  ): void => {
    for (const entry of this.longTaskEntries) {
      if (entry.duration < threshold) continue
      callback(entry)
    }
  }

  /** 从 performance API 获取长任务条目 */
  private getEntriesFromPerformanceAPI = (): LongTaskMetrics[] => {
    if (!supportEntryType(ENTRY_TYPE.LONGTASK)) return []

    const perfEntries = performance.getEntriesByType(
      ENTRY_TYPE.LONGTASK
    ) as PerformanceLongTaskTimingExt[]

    return perfEntries.map(this.parseLongTaskEntry)
  }

  /** 计算统计数据 */
  private computeStats = (entries: LongTaskMetrics[]): LongTaskStats => {
    if (entries.length === 0) {
      return {
        count: 0,
        totalDuration: 0,
        maxDuration: 0,
        avgDuration: 0,
        entries: [],
      }
    }

    let totalDuration = 0
    let maxDuration = 0

    for (const entry of entries) {
      totalDuration += entry.duration
      if (entry.duration > maxDuration) {
        maxDuration = entry.duration
      }
    }

    return {
      count: entries.length,
      totalDuration,
      maxDuration,
      avgDuration: totalDuration / entries.length,
      entries,
    }
  }

  /**
   * 监控长任务
   * 长任务是指阻塞主线程超过 50ms 的任务
   * @param callback - 长任务回调函数（可选）
   * @param options - 配置选项
   * @returns 停止监听函数
   */
  observe = (
    callback?: LongTaskCallback,
    options?: ObserveLongTaskOptions
  ): StopListening => {
    const { threshold = DEFAULT_LONG_TASK_THRESHOLD, reportExisting = true } =
      options || {}

    if (!supportEntryType(ENTRY_TYPE.LONGTASK)) {
      console.warn('[longTaskMonitor] Long Task API is not supported')
      return () => {}
    }

    // 上报已存在的长任务
    if (reportExisting && callback) {
      this.reportExistingEntries(threshold, callback)
    }

    const { stop } = createPerformanceObserver<PerformanceLongTaskTimingExt>(
      ENTRY_TYPE.LONGTASK,
      (entries) => {
        for (const entry of entries) {
          this.handleEntry(entry, threshold, callback)
        }
      }
    )

    this.stopObserver = stop

    return stop
  }

  /** 停止监听 */
  stop = (): void => {
    this.stopObserver?.()
    this.stopObserver = null
  }

  /** 清空长任务记录 */
  clear = (): void => {
    this.longTaskEntries = []
  }

  /** 获取所有记录的长任务 */
  getEntries = (): LongTaskMetrics[] => {
    return [...this.longTaskEntries]
  }

  /** 获取长任务统计信息 */
  getStats = (): LongTaskStats => {
    // 优先使用内部缓存，为空则从 performance API 获取
    const entries =
      this.longTaskEntries.length > 0
        ? this.longTaskEntries
        : this.getEntriesFromPerformanceAPI()

    return this.computeStats(entries)
  }

  /**
   * 计算总阻塞时间 (TBT - Total Blocking Time)
   * TBT 是 FCP 到 TTI 之间所有长任务的阻塞部分（超过 50ms 的部分）总和
   *
   * @param fcpTime - FCP (First Contentful Paint) 首次内容绘制时间，不提供则使用 0
   * @param ttiTime - TTI (Time to Interactive) 可交互时间，不提供则使用当前时间
   * @returns TBT 值（ms）
   */
  calculateTBT = (fcpTime?: number, ttiTime?: number): number => {
    // 优先使用内部缓存，为空则从 performance API 获取
    const entries =
      this.longTaskEntries.length > 0
        ? this.longTaskEntries
        : this.getEntriesFromPerformanceAPI()

    const startTime = fcpTime ?? 0
    const endTime = ttiTime ?? performance.now()

    let tbt = 0

    for (const entry of entries) {
      // 跳过不在时间范围内的条目
      const entryEndTime = entry.startTime + entry.duration
      const isInRange = entry.startTime >= startTime && entryEndTime <= endTime
      if (!isInRange) continue

      // 阻塞时间 = 长任务持续时间 - 50ms
      const blockingTime = entry.duration - DEFAULT_LONG_TASK_THRESHOLD

      if (blockingTime <= 0) continue

      tbt += blockingTime
    }

    return tbt
  }
}

// ==================== 类型导出 ====================

export type {
  LongTaskCallback,
  LongTaskMetrics,
  LongTaskMonitorInstance,
  LongTaskStats,
  ObserveLongTaskOptions,
  PerformanceLongTaskTimingExt,
  StopListening,
  TaskAttribution,
  TaskAttributionTimingExt,
} from './interface'
