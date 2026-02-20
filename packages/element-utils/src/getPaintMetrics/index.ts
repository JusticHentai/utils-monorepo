/**
 * 获取绘制性能指标（FP / FCP）
 * 基于 Paint Timing API 计算首次绘制和首次内容绘制耗时
 */

import getMetricRating from '../getMetricRating'
import { METRIC_NAME } from '../getMetricRating/interface'
import { ENTRY_TYPE, PAINT_NAME } from '../WebVitalsMonitor/interface'

import type { PaintMetrics } from './interface'

/**
 * 获取绘制性能指标
 * @returns 绘制性能指标，如果不可用则返回 undefined
 */
const getPaintMetrics = (): PaintMetrics | undefined => {
  if (typeof performance === 'undefined') {
    return undefined
  }

  const navigationEntries = performance.getEntriesByType(ENTRY_TYPE.NAVIGATION)
  const paintEntries = performance.getEntriesByType(ENTRY_TYPE.PAINT)

  const navigation = navigationEntries?.[0] as PerformanceNavigationTiming
  const firstPaint = paintEntries.find(
    (item) => item.name === PAINT_NAME.FIRST_PAINT
  )
  const firstContentfulPaint = paintEntries.find(
    (item) => item.name === PAINT_NAME.FIRST_CONTENTFUL_PAINT
  )

  if (!navigation || !firstPaint || !firstContentfulPaint) {
    return undefined
  }

  const FP = firstPaint.startTime - navigation.fetchStart
  const FCP = firstContentfulPaint.startTime - navigation.fetchStart

  return {
    FP,
    FCP,
    FPRating: getMetricRating(METRIC_NAME.FP, FP),
    FCPRating: getMetricRating(METRIC_NAME.FCP, FCP),
  }
}

export default getPaintMetrics
