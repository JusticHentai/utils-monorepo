import { METRIC_NAME, METRIC_RATING, WEB_VITALS_THRESHOLDS } from './interface'

/**
 * 获取 Web Vitals 指标评级
 * @param name - 指标名称
 * @param value - 指标值（毫秒或分数）
 * @returns 指标评级（good/needs-improvement/poor）
 */
const getMetricRating = (name: METRIC_NAME, value: number): METRIC_RATING => {
  const thresholds = WEB_VITALS_THRESHOLDS[name]

  if (!thresholds) return METRIC_RATING.GOOD

  if (value <= thresholds.good) return METRIC_RATING.GOOD
  if (value <= thresholds.poor) return METRIC_RATING.NEEDS_IMPROVEMENT

  return METRIC_RATING.POOR
}

export default getMetricRating
