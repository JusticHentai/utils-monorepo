import createEventListener from '../createEventListener'
import getMetricRating from '../getMetricRating'
import { METRIC_NAME } from '../getMetricRating/interface'
import getNavigationType from '../getNavigationType'
import { createPerformanceObserver } from '../observer'
import { ENTRY_TYPE } from '../WebVitalsMonitor/interface'
import uniqueId from '../uniqueId'
import type { LCPMetric, OnLCPMetricCallback, OnLCPOptions } from './interface'

/**
 * 监听 LCP (Largest Contentful Paint)
 *
 * LCP 衡量从页面开始加载到最大文本块或图像元素渲染完成的时间
 *
 * @param callback - LCP 回调函数，接收完整的 LCPMetric 对象
 * @param options - 配置选项
 * @returns 清理函数
 */
const onLCP = (
  callback: OnLCPMetricCallback,
  options?: OnLCPOptions
): (() => void) => {
  const reportAllChanges = options?.reportAllChanges ?? false

  let metric: LCPMetric = {
    name: METRIC_NAME.LCP,
    value: 0,
    rating: getMetricRating(METRIC_NAME.LCP, 0),
    delta: 0,
    id: uniqueId(),
    navigationType: getNavigationType(),
    entries: [],
  }

  let reported = false

  const report = () => {
    if (metric.value === 0) return

    callback(metric)
    reported = true
  }

  const { stop } = createPerformanceObserver<LargestContentfulPaint>(
    ENTRY_TYPE.LARGEST_CONTENTFUL_PAINT,
    (entries) => {
      const latestEntry = entries[entries.length - 1]

      if (!latestEntry) return

      const value = latestEntry.renderTime || latestEntry.loadTime

      metric = {
        ...metric,
        value,
        delta: value - metric.value,
        rating: getMetricRating(METRIC_NAME.LCP, value),
        entries: [...metric.entries, latestEntry],
      }

      if (!reportAllChanges) return

      report()
    }
  )

  // 页面隐藏时报告最终 LCP
  if (!reportAllChanges) {
    const handleVisibilityChange = () => {
      if (document.visibilityState !== 'hidden') return
      if (reported) return

      report()
      stop()
    }

    const stopVisibilityListener = createEventListener(
      document,
      'visibilitychange',
      handleVisibilityChange,
      { once: true }
    )

    return () => {
      stopVisibilityListener()
      stop()
    }
  }

  return stop
}

export default onLCP
