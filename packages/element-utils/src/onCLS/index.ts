import getMetricRating from '../getMetricRating'
import { METRIC_NAME } from '../getMetricRating/interface'
import getNavigationType from '../getNavigationType'
import { createPerformanceObserver } from '../observer'
import { ENTRY_TYPE } from '../WebVitalsMonitor/interface'
import uniqueId from '../uniqueId'
import visibility from '../visibility'
import type {
  CLSMetric,
  LayoutShiftEntry,
  OnCLSMetricCallback,
  OnCLSOptions,
} from './interface'

/**
 * 处理单个布局偏移条目
 */
const processLayoutShiftEntry = (
  entry: LayoutShiftEntry,
  sessionValue: number,
  sessionEntries: LayoutShiftEntry[]
): { sessionValue: number; sessionEntries: LayoutShiftEntry[] } => {
  // 只统计没有用户输入的布局偏移
  if (entry.hadRecentInput) {
    return { sessionValue, sessionEntries }
  }

  const firstSessionEntry = sessionEntries[0]
  const lastSessionEntry = sessionEntries[sessionEntries.length - 1]

  // 如果距离上次偏移超过 1 秒，或者距离第一次偏移超过 5 秒，开始新 session
  const shouldContinueSession =
    sessionValue &&
    entry.startTime - (lastSessionEntry?.startTime || 0) < 1000 &&
    entry.startTime - (firstSessionEntry?.startTime || 0) < 5000

  if (shouldContinueSession) {
    return {
      sessionValue: sessionValue + entry.value,
      sessionEntries: [...sessionEntries, entry],
    }
  }

  return {
    sessionValue: entry.value,
    sessionEntries: [entry],
  }
}

/**
 * 监听 CLS (Cumulative Layout Shift)
 *
 * CLS 衡量页面加载期间和整个生命周期内发生的意外布局偏移
 *
 * @param callback - CLS 回调函数，接收完整的 CLSMetric 对象
 * @param options - 配置选项
 * @returns 清理函数
 */
const onCLS = (
  callback: OnCLSMetricCallback,
  options?: OnCLSOptions
): (() => void) => {
  const reportAllChanges = options?.reportAllChanges ?? false

  let metric: CLSMetric = {
    name: METRIC_NAME.CLS,
    value: 0,
    rating: getMetricRating(METRIC_NAME.CLS, 0),
    delta: 0,
    id: uniqueId(),
    navigationType: getNavigationType(),
    entries: [],
  }

  let sessionValue = 0
  let sessionEntries: LayoutShiftEntry[] = []

  const report = () => {
    callback(metric)
  }

  const { stop } = createPerformanceObserver<LayoutShiftEntry>(
    ENTRY_TYPE.LAYOUT_SHIFT,
    (entries) => {
      entries.forEach((entry) => {
        const result = processLayoutShiftEntry(
          entry,
          sessionValue,
          sessionEntries
        )
        sessionValue = result.sessionValue
        sessionEntries = result.sessionEntries

        // 更新最大的 session 作为 CLS
        if (sessionValue <= metric.value) return

        metric = {
          ...metric,
          value: sessionValue,
          delta: sessionValue - metric.value,
          rating: getMetricRating(METRIC_NAME.CLS, sessionValue),
          entries: sessionEntries,
        }

        if (!reportAllChanges) return

        report()
      })
    }
  )

  // 页面隐藏时报告最终 CLS
  if (!reportAllChanges) {
    const stopVisibility = visibility({
      hidden: () => {
        report()
        stop()
      },
      once: true,
    })

    return () => {
      stopVisibility()
      stop()
    }
  }

  return stop
}

export default onCLS
