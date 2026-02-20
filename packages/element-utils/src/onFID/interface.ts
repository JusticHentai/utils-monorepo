import type { METRIC_NAME, METRIC_RATING } from '../getMetricRating/interface'
import type { NAVIGATION_TYPE } from '../getNavigationType/interface'

/** FID 完整指标对象 */
export interface FIDMetric {
  /** 指标名称 */
  name: METRIC_NAME.FID
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
  entries: PerformanceEventTiming[]
}

/** FID 回调函数 */
export type OnFIDMetricCallback = (metric: FIDMetric) => void
