import getMetricRating from '../getMetricRating'
import { METRIC_NAME } from '../getMetricRating/interface'
import getNavigationType from '../getNavigationType'
import { createPerformanceObserver } from '../observer'
import { ENTRY_TYPE } from '../WebVitalsMonitor/interface'
import onBFCacheRestore from '../onBFCacheRestore'
import uniqueId from '../uniqueId'
import visibility from '../visibility'
import {
  MAX_INTERACTIONS,
  type INPMetric,
  type OnINPMetricCallback,
  type OnINPOptions,
  type PerformanceEventTimingExt,
} from './interface'

/**
 * 监听 INP (Interaction to Next Paint)
 *
 * INP 衡量页面整体响应性，取代 FID 成为核心 Web Vitals 指标
 *
 * @param callback - INP 回调函数，接收完整的 INPMetric 对象
 * @param options - 配置选项
 * @returns 清理函数
 */
const onINP = (
  callback: OnINPMetricCallback,
  options?: OnINPOptions
): (() => void) => {
  const reportAllChanges = options?.reportAllChanges ?? false
  const durationThreshold = options?.durationThreshold ?? 40

  let metric: INPMetric = {
    name: METRIC_NAME.INP,
    value: 0,
    rating: getMetricRating(METRIC_NAME.INP, 0),
    delta: 0,
    id: uniqueId(),
    navigationType: getNavigationType(),
    entries: [],
  }

  // 存储所有交互的延迟
  const interactionMap = new Map<number, number>()
  const longestInteractions: Array<{ id: number; latency: number }> = []

  let lastINP = 0
  let lastEntry: PerformanceEventTimingExt | null = null

  // 计算 INP（取最高的第 98 百分位）
  const computeINP = (): number => {
    const interactionCount = Math.min(
      longestInteractions.length,
      MAX_INTERACTIONS
    )

    if (interactionCount === 0) return 0

    // 按延迟排序
    longestInteractions.sort((a, b) => b.latency - a.latency)

    // 取第 98 百分位（如果交互少于 50 个，取最大值）
    const idx = Math.min(
      longestInteractions.length - 1,
      Math.floor(interactionCount / 50)
    )

    return longestInteractions[idx]?.latency || 0
  }

  const report = () => {
    if (!lastEntry) return

    metric = {
      ...metric,
      value: lastINP,
      delta: lastINP - metric.value,
      rating: getMetricRating(METRIC_NAME.INP, lastINP),
      entries: [lastEntry as PerformanceEventTiming],
    }

    callback(metric)
  }

  const { stop } = createPerformanceObserver<PerformanceEventTimingExt>(
    ENTRY_TYPE.EVENT,
    (entries) => {
      for (const entry of entries) {
        // 忽略没有 interactionId 的条目
        if (!entry.interactionId) continue

        const duration = entry.duration
        const existingLatency = interactionMap.get(entry.interactionId)

        // 对于同一个交互，只记录最长的延迟
        if (existingLatency !== undefined && duration <= existingLatency)
          continue

        interactionMap.set(entry.interactionId, duration)

        // 更新最长交互列表
        const idx = longestInteractions.findIndex(
          (i) => i.id === entry.interactionId
        )

        if (idx >= 0) {
          longestInteractions[idx].latency = duration
        } else {
          longestInteractions.push({
            id: entry.interactionId,
            latency: duration,
          })
        }

        // 保持列表长度
        if (longestInteractions.length > MAX_INTERACTIONS) {
          longestInteractions.sort((a, b) => b.latency - a.latency)
          longestInteractions.pop()
        }

        const inp = computeINP()

        if (inp <= 0 || inp === lastINP) continue

        lastINP = inp
        lastEntry = entry

        if (!reportAllChanges) continue

        report()
      }
    },
    { durationThreshold }
  )

  // 页面隐藏时报告
  const stopVisibility = visibility({
    hidden: report,
    once: true,
    safariCompat: true,
  })

  // BFCache 恢复时重新初始化
  const stopBFCache = onBFCacheRestore(() => {
    interactionMap.clear()
    longestInteractions.length = 0
    lastINP = 0
    lastEntry = null
    metric = {
      name: METRIC_NAME.INP,
      value: 0,
      rating: getMetricRating(METRIC_NAME.INP, 0),
      delta: 0,
      id: uniqueId(),
      navigationType: getNavigationType(),
      entries: [],
    }
  })

  return () => {
    stop()
    stopVisibility()
    stopBFCache()
  }
}

export default onINP
