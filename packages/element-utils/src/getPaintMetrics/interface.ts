import type { MetricRating } from '../Surveillance/interface'

/** 绘制性能指标 */
export interface PaintMetrics {
  /** First Paint 时间 (ms) */
  FP: number
  /** First Contentful Paint 时间 (ms) */
  FCP: number
  /** FP 评级 */
  FPRating: MetricRating
  /** FCP 评级 */
  FCPRating: MetricRating
}
