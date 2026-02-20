import getMetricRating from '../getMetricRating'
import { METRIC_NAME } from '../getMetricRating/interface'
import getNavigationType from '../getNavigationType'
import { createPerformanceObserver } from '../observer'
import { ENTRY_TYPE, PAINT_NAME } from '../WebVitalsMonitor/interface'
import uniqueId from '../uniqueId'
import type { FPMetric, OnFPMetricCallback } from './interface'

/**
 * 监听 FP (First Paint)
 *
 * FP 衡量从导航开始到浏览器首次在屏幕上渲染像素的时间
 *
 * @param callback - FP 回调函数，接收完整的 FPMetric 对象
 * @returns 清理函数
 */
const onFP = (callback: OnFPMetricCallback): (() => void) => {
  let reported = false

  const { stop } = createPerformanceObserver<PerformancePaintTiming>(
    ENTRY_TYPE.PAINT,
    (entries) => {
      for (const entry of entries) {
        if (entry.name !== PAINT_NAME.FIRST_PAINT) continue
        if (reported) continue

        reported = true

        const value = entry.startTime

        const metric: FPMetric = {
          name: METRIC_NAME.FP,
          value,
          delta: value,
          rating: getMetricRating(METRIC_NAME.FP, value),
          id: uniqueId(),
          navigationType: getNavigationType(),
          entries: [entry],
        }

        callback(metric)
        stop()
        break
      }
    }
  )

  return stop
}

export default onFP
