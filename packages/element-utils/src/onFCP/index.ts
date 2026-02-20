import getMetricRating from '../getMetricRating'
import { METRIC_NAME } from '../getMetricRating/interface'
import getNavigationType from '../getNavigationType'
import { createPerformanceObserver } from '../observer'
import { ENTRY_TYPE, PAINT_NAME } from '../WebVitalsMonitor/interface'
import uniqueId from '../uniqueId'
import type { FCPMetric, OnFCPMetricCallback } from './interface'

/**
 * 监听 FCP (First Contentful Paint)
 *
 * FCP 衡量从导航开始到页面内容任何部分渲染到屏幕上的时间
 *
 * @param callback - FCP 回调函数，接收完整的 FCPMetric 对象
 * @returns 清理函数
 */
const onFCP = (callback: OnFCPMetricCallback): (() => void) => {
  let reported = false

  const { stop } = createPerformanceObserver<PerformancePaintTiming>(
    ENTRY_TYPE.PAINT,
    (entries) => {
      const fcpEntry = entries.find(
        (e) => e.name === PAINT_NAME.FIRST_CONTENTFUL_PAINT
      )

      if (!fcpEntry) return
      if (reported) return

      reported = true

      const value = fcpEntry.startTime

      const metric: FCPMetric = {
        name: METRIC_NAME.FCP,
        value,
        delta: value,
        rating: getMetricRating(METRIC_NAME.FCP, value),
        id: uniqueId(),
        navigationType: getNavigationType(),
        entries: [fcpEntry],
      }

      callback(metric)
      stop()
    }
  )

  return stop
}

export default onFCP
