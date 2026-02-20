/** Web Vitals 指标名称 */
export enum METRIC_NAME {
  /** LCP (Largest Contentful Paint) 最大内容绘制 */
  LCP = 'LCP',
  /** FID (First Input Delay) 首次输入延迟 */
  FID = 'FID',
  /** CLS (Cumulative Layout Shift) 累积布局偏移 */
  CLS = 'CLS',
  /** FCP (First Contentful Paint) 首次内容绘制 */
  FCP = 'FCP',
  /** TTFB (Time to First Byte) 首字节时间 */
  TTFB = 'TTFB',
  /** INP (Interaction to Next Paint) 交互到下一帧绘制 */
  INP = 'INP',
  /** FP (First Paint) 首次绘制 */
  FP = 'FP',
}

/** 指标评级 */
export enum METRIC_RATING {
  /** 性能良好 */
  GOOD = 'good',
  /** 需要改进 */
  NEEDS_IMPROVEMENT = 'needs-improvement',
  /** 性能较差 */
  POOR = 'poor',
}

/** 阈值配置 */
export interface MetricThreshold {
  /** 良好阈值 */
  good: number
  /** 较差阈值 */
  poor: number
}

/** Web Vitals 阈值配置 */
export const WEB_VITALS_THRESHOLDS: Record<METRIC_NAME, MetricThreshold> = {
  /** LCP (Largest Contentful Paint): 2.5s 良好, 4s 较差 */
  [METRIC_NAME.LCP]: { good: 2500, poor: 4000 },
  /** FID (First Input Delay): 100ms 良好, 300ms 较差 */
  [METRIC_NAME.FID]: { good: 100, poor: 300 },
  /** CLS (Cumulative Layout Shift): 0.1 良好, 0.25 较差 */
  [METRIC_NAME.CLS]: { good: 0.1, poor: 0.25 },
  /** FCP (First Contentful Paint): 1.8s 良好, 3s 较差 */
  [METRIC_NAME.FCP]: { good: 1800, poor: 3000 },
  /** TTFB (Time to First Byte): 800ms 良好, 1.8s 较差 */
  [METRIC_NAME.TTFB]: { good: 800, poor: 1800 },
  /** INP (Interaction to Next Paint): 200ms 良好, 500ms 较差 */
  [METRIC_NAME.INP]: { good: 200, poor: 500 },
  /** FP (First Paint): 1s 良好, 2.5s 较差 */
  [METRIC_NAME.FP]: { good: 1000, poor: 2500 },
}
