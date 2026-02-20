import getMetricRating from '../getMetricRating'
import { METRIC_NAME } from '../getMetricRating/interface'
import getNavigationType from '../getNavigationType'
import { createPerformanceObserver } from '../observer'
import { ENTRY_TYPE } from '../WebVitalsMonitor/interface'
import uniqueId from '../uniqueId'
import type { FIDMetric, OnFIDMetricCallback } from './interface'

/**
 * 监听 FID (First Input Delay)
 *
 * FID 衡量从用户首次与页面交互到浏览器开始处理事件的时间
 * 注意：FID 已被 INP 取代作为核心 Web Vitals 指标
 *
 * @param callback - FID 回调函数，接收完整的 FIDMetric 对象
 * @returns 清理函数
 */
const onFID = (callback: OnFIDMetricCallback): (() => void) => {
  let reported = false

  const { stop } = createPerformanceObserver<PerformanceEventTiming>(
    ENTRY_TYPE.FIRST_INPUT,
    (entries) => {
      const firstEntry = entries[0]

      if (!firstEntry) return
      if (reported) return

      reported = true

      const value = firstEntry.processingStart - firstEntry.startTime

      const metric: FIDMetric = {
        name: METRIC_NAME.FID,
        value,
        delta: value,
        rating: getMetricRating(METRIC_NAME.FID, value),
        id: uniqueId(),
        navigationType: getNavigationType(),
        entries: [firstEntry],
      }

      callback(metric)
      stop()
    }
  )

  return stop
}

export default onFID
