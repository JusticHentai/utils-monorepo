import { METRIC_NAME, METRIC_RATING } from '../getMetricRating/interface'
import type { NAVIGATION_TYPE } from '../getNavigationType/interface'

// 重新导出供其他模块使用
export { METRIC_NAME, METRIC_RATING }
export type { NAVIGATION_TYPE }

/** PerformanceObserver 支持的条目类型 */
export enum ENTRY_TYPE {
  /** 导航相关 */
  NAVIGATION = 'navigation',
  /** LCP 相关 */
  LARGEST_CONTENTFUL_PAINT = 'largest-contentful-paint',
  /** FID 相关 */
  FIRST_INPUT = 'first-input',
  /** CLS 相关 */
  LAYOUT_SHIFT = 'layout-shift',
  /** FCP & FP 相关 */
  PAINT = 'paint',
  /** INP 相关 */
  EVENT = 'event',
  /** 长任务 */
  LONGTASK = 'longtask',
  /** 资源加载 */
  RESOURCE = 'resource',
}

/** Paint 条目名称 */
export enum PAINT_NAME {
  /** 首次绘制 */
  FIRST_PAINT = 'first-paint',
  /** 首次内容绘制 */
  FIRST_CONTENTFUL_PAINT = 'first-contentful-paint',
}

/** Web Vitals 完整指标对象 */
export interface WebVitalsMetric {
  /** 指标名称 */
  name: METRIC_NAME
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
  entries: PerformanceEntry[]
}

/** Web Vitals 回调函数 */
export type WebVitalsCallback = (metric: WebVitalsMetric) => void

/** observeWebVitals 配置选项 */
export interface ObserveWebVitalsOptions {
  /** 是否报告所有变化（针对 LCP、CLS、INP），默认 false */
  reportAllChanges?: boolean
  /** INP 持续时间阈值（ms），默认 40 */
  durationThreshold?: number
}

/** 停止监听函数类型 */
export type StopListening = () => void
