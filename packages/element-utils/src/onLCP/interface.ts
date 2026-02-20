import type { METRIC_NAME, METRIC_RATING } from '../getMetricRating/interface'
import type { NAVIGATION_TYPE } from '../getNavigationType/interface'

/** LCP 完整指标对象 */
export interface LCPMetric {
  /** 指标名称 */
  name: METRIC_NAME.LCP
  /** 指标值（ms） */
  value: number
  /** 指标评级 */
  rating: METRIC_RATING
  /** 与上次值的差值 */
  delta: number
  /** 唯一标识符 */
  id: string
  /** 导航类型 */
  navigationType: NAVIGATION_TYPE
  /** 相关的所有性能条目 */
  entries: LargestContentfulPaint[]
}

/** LCP 回调函数 */
export type OnLCPMetricCallback = (metric: LCPMetric) => void

/** onLCP 配置选项 */
export interface OnLCPOptions {
  /** 是否报告所有变化，默认 false */
  reportAllChanges?: boolean
}
