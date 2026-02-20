import type { METRIC_NAME, METRIC_RATING } from '../getMetricRating/interface'
import type { NAVIGATION_TYPE } from '../getNavigationType/interface'

/** onINP 配置选项 */
export interface OnINPOptions {
  /** 是否报告所有变化，默认 false */
  reportAllChanges?: boolean
  /** 持续时间阈值（ms），默认 40 */
  durationThreshold?: number
}

/** 最大交互数量，用于计算 INP 第 98 百分位 */
export const MAX_INTERACTIONS = 10

/** PerformanceEventTiming 扩展（包含 interactionId） */
export interface PerformanceEventTimingExt extends PerformanceEntry {
  readonly processingStart: number
  readonly processingEnd: number
  readonly interactionId: number
  readonly cancelable: boolean
  readonly target: Node | null
}

/** INP 完整指标对象 */
export interface INPMetric {
  /** 指标名称 */
  name: METRIC_NAME.INP
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

/** INP 回调函数 */
export type OnINPMetricCallback = (metric: INPMetric) => void
