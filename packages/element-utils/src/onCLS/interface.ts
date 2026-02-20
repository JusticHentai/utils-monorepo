import type { METRIC_NAME, METRIC_RATING } from '../getMetricRating/interface'
import type { NAVIGATION_TYPE } from '../getNavigationType/interface'

/**
 * LayoutShift 条目类型（扩展 PerformanceEntry）
 */
export interface LayoutShiftEntry extends PerformanceEntry {
  /** 是否有最近的用户输入（不计入 CLS） */
  hadRecentInput: boolean
  /** 布局偏移值 */
  value: number
}

/** CLS 完整指标对象 */
export interface CLSMetric {
  /** 指标名称 */
  name: METRIC_NAME.CLS
  /** 指标值 */
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
  entries: LayoutShiftEntry[]
}

/** CLS 回调函数 */
export type OnCLSMetricCallback = (metric: CLSMetric) => void

/** onCLS 配置选项 */
export interface OnCLSOptions {
  /** 是否报告所有变化，默认 false */
  reportAllChanges?: boolean
}
