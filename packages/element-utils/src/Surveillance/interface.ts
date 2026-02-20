/**
 * Surveillance 接口类型和默认配置
 *
 * 包含性能监控工具的所有类型定义，基于 Web Vitals、Performance API 等现代标准
 */

import { METRIC_NAME, METRIC_RATING } from '../getMetricRating/interface'
import type { NavigationMetrics } from '../getNavigationMetrics/interface'
import { NAVIGATION_TYPE } from '../getNavigationType/interface'
import type { ReportData as ReporterReportData } from '../Reporter/interface'
import { PERFORMANCE_TYPE, REPORT_TYPE } from '../Reporter/interface'
import type { ResourceMetrics } from '../ResourceMonitor/interface'

// 重新导出枚举供外部使用
export { METRIC_NAME, METRIC_RATING, NAVIGATION_TYPE, PERFORMANCE_TYPE }

// ==================== 基础类型 ====================

/**
 * 指标评级
 * - good: 性能良好
 * - needs-improvement: 需要改进
 * - poor: 性能较差
 */
export type MetricRating = `${METRIC_RATING}`

/**
 * 指标名称
 * - CLS: 累积布局偏移
 * - FCP: 首次内容绘制
 * - FID: 首次输入延迟
 * - INP: 交互到下一帧绘制
 * - LCP: 最大内容绘制
 * - TTFB: 首字节时间
 * - FP: 首次绘制
 */
export type MetricName = `${METRIC_NAME}`

/**
 * 导航类型
 * - navigate: 常规导航
 * - reload: 页面刷新
 * - back-forward: 前进/后退
 * - back-forward-cache: BFCache 恢复
 * - prerender: 预渲染
 * - restore: 页面恢复
 */
export type NavigationType = `${NAVIGATION_TYPE}` | 'restore'

// ==================== 指标类型 ====================

/** 基础指标接口 */
export interface Metric {
  /** 指标名称 */
  name: MetricName
  /** 指标值 */
  value: number
  /** 指标评级 */
  rating: MetricRating
  /** 增量值（用于 CLS） */
  delta: number
  /** 唯一标识 */
  id: string
  /** 导航类型 */
  navigationType: NavigationType
  /** 相关性能条目 */
  entries: PerformanceEntry[]
}

/** LCP 指标 */
export interface LCPMetric extends Metric {
  name: 'LCP'
  entries: LargestContentfulPaint[]
}

/** FID 指标 */
export interface FIDMetric extends Metric {
  name: 'FID'
  entries: PerformanceEventTiming[]
}

/** CLS 指标 */
export interface CLSMetric extends Metric {
  name: 'CLS'
  entries: LayoutShiftExt[]
}

/** FCP 指标 */
export interface FCPMetric extends Metric {
  name: 'FCP'
  entries: PerformancePaintTiming[]
}

/** INP 指标 */
export interface INPMetric extends Metric {
  name: 'INP'
  entries: PerformanceEventTimingExt[]
}

/** TTFB 指标 */
export interface TTFBMetric extends Metric {
  name: 'TTFB'
  entries: PerformanceNavigationTiming[]
}

// ==================== 导航性能类型 ====================

// 导航性能指标已迁移到独立模块
export type { NavigationMetrics } from '../getNavigationMetrics/interface'

// ==================== 资源性能类型 ====================

// 从 ResourceMonitor 模块重新导出
export type {
  ResourceMetrics,
  ResourceType,
} from '../ResourceMonitor/interface'

// ==================== 长任务类型 ====================

/** 长任务指标 */
export interface LongTaskMetrics {
  /** 任务名称 */
  name: string
  /** 任务开始时间 */
  startTime: number
  /** 任务持续时间 */
  duration: number
  /** 任务归因信息 */
  attribution: TaskAttribution[]
}

/** 任务归因信息 */
export interface TaskAttribution {
  /** 容器类型 */
  containerType: string
  /** 容器 ID */
  containerId: string
  /** 容器名称 */
  containerName: string
  /** 容器源 */
  containerSrc: string
}

// ==================== 错误监控类型 ====================

/**
 * 错误类型
 * - js: JavaScript 运行时错误
 * - resource: 资源加载错误
 * - promise: Promise 未处理拒绝错误
 * - ajax: XMLHttpRequest 请求错误
 * - fetch: Fetch 请求错误
 * - console: console.error 调用
 */
export type ErrorType =
  | 'js'
  | 'resource'
  | 'promise'
  | 'ajax'
  | 'fetch'
  | 'console'

/** 错误信息 */
export interface ErrorInfo {
  /** 错误类型 */
  type: ErrorType
  /** 错误消息 */
  message: string
  /** 错误堆栈 */
  stack?: string
  /** 发生时间 */
  timestamp: number
  /** 页面 URL */
  pageUrl: string
  /** 用户代理 */
  userAgent: string
  /** 额外信息 */
  extra?: Record<string, unknown>
}

/** JS 错误信息 */
export interface JSErrorInfo extends ErrorInfo {
  type: 'js'
  /** 文件名 */
  filename?: string
  /** 行号 */
  lineno?: number
  /** 列号 */
  colno?: number
}

/** 资源加载错误信息 */
export interface ResourceErrorInfo extends ErrorInfo {
  type: 'resource'
  /** 资源 URL */
  resourceUrl: string
  /** 资源类型 */
  resourceType: string
}

/** Promise 错误信息 */
export interface PromiseErrorInfo extends ErrorInfo {
  type: 'promise'
  /** 原因 */
  reason: unknown
}

/** 请求错误信息 */
export interface RequestErrorInfo extends ErrorInfo {
  type: 'ajax' | 'fetch'
  /** 请求 URL */
  requestUrl: string
  /** 请求方法 */
  method: string
  /** 状态码 */
  status?: number
  /** 响应内容 */
  response?: string
  /** 请求耗时 */
  duration?: number
}

// ==================== 网络请求类型 ====================

/** 请求信息 */
export interface RequestInfo {
  /** 请求 URL */
  url: string
  /** 请求方法 */
  method: string
  /** 请求头 */
  headers?: Record<string, string>
  /** 请求体 */
  body?: unknown
  /** 开始时间 */
  startTime: number
  /** 结束时间 */
  endTime?: number
  /** 耗时 */
  duration?: number
  /** 状态码 */
  status?: number
  /** 响应大小 */
  responseSize?: number
  /** 是否成功 */
  success: boolean
  /** 错误信息 */
  error?: string
}

// ==================== 用户行为类型 ====================

/**
 * 用户行为类型
 * - click: 点击行为
 * - scroll: 滚动行为
 * - input: 输入行为
 * - navigate: 路由导航
 * - custom: 自定义行为
 */
export type BehaviorType = 'click' | 'scroll' | 'input' | 'navigate' | 'custom'

/** 用户行为信息 */
export interface BehaviorInfo {
  /** 行为类型 */
  type: BehaviorType
  /** 发生时间 */
  timestamp: number
  /** 页面 URL */
  pageUrl: string
  /** 元素信息 */
  target?: {
    tagName: string
    id?: string
    className?: string
    innerText?: string
    xpath?: string
  }
  /** 额外数据 */
  data?: Record<string, unknown>
}

// ==================== 页面信息类型 ====================

// 从 getPageInfo 模块重新导出
export type { PageInfo } from '../getPageInfo/interface'

// ==================== 配置类型 ====================

/** 监控配置 */
export interface SurveillanceConfig {
  /** 应用 ID */
  appId?: string
  /** 是否启用 */
  enabled?: boolean
  /** 采样率 (0-1) */
  sampleRate?: number
  /** 上报地址 */
  reportUrl?: string
  /** 上报方式 */
  reportMethod?: 'beacon' | 'fetch' | 'xhr' | 'img'
  /** 批量上报阈值 */
  batchSize?: number
  /** 上报间隔 (ms) */
  reportInterval?: number
  /** 最大缓存条数 */
  maxCacheSize?: number

  /** 性能监控配置 */
  performance?: {
    /** 是否启用 */
    enabled?: boolean
    /** 是否监控 Web Vitals */
    webVitals?: boolean
    /** 是否监控资源加载 */
    resource?: boolean
    /** 是否监控长任务 */
    longTask?: boolean
    /** 长任务阈值 (ms) */
    longTaskThreshold?: number
    /** 资源过滤 */
    resourceFilter?: (entry: PerformanceResourceTiming) => boolean
    /** 是否监控 FPS */
    fps?: boolean
    /** 是否监控卡顿 */
    jank?: boolean
    /** 卡顿阈值 (ms)，默认 100ms */
    jankThreshold?: number
    /** 是否上报导航性能 */
    navigation?: boolean
  }

  /** 错误监控配置 */
  error?: {
    /** 是否启用 */
    enabled?: boolean
    /** 是否监控 JS 错误 */
    jsError?: boolean
    /** 是否监控资源加载错误 */
    resourceError?: boolean
    /** 是否监控 Promise 错误 */
    promiseError?: boolean
    /** 是否监控请求错误 */
    requestError?: boolean
    /** 错误过滤 */
    errorFilter?: (error: ErrorInfo) => boolean
    /** 忽略的错误消息 */
    ignoreErrors?: (string | RegExp)[]
  }

  /** 请求监控配置 */
  request?: {
    /** 是否启用 */
    enabled?: boolean
    /** 是否监控 XMLHttpRequest */
    xhr?: boolean
    /** 是否监控 Fetch */
    fetch?: boolean
    /** URL 过滤 */
    urlFilter?: (url: string) => boolean
    /** 忽略的 URL */
    ignoreUrls?: (string | RegExp)[]
    /** 超时阈值 (ms) */
    timeoutThreshold?: number
  }

  /** 用户行为监控配置 */
  behavior?: {
    /** 是否启用 */
    enabled?: boolean
    /** 是否监控点击 */
    click?: boolean
    /** 是否监控滚动 */
    scroll?: boolean
    /** 是否监控输入 */
    input?: boolean
    /** 是否监控路由变化 */
    routeChange?: boolean
    /** 最大记录数 */
    maxBehaviors?: number
  }

  /** 页面生命周期监控配置 */
  lifecycle?: {
    /** 是否启用 */
    enabled?: boolean
  }

  /** 自定义钩子 */
  hooks?: {
    /** 上报前处理 */
    beforeReport?: (data: ReportData) => ReportData | false
    /** 上报后处理 */
    afterReport?: (data: ReportData, success: boolean) => void
    /** 错误处理 */
    onError?: (error: ErrorInfo) => void
    /** 性能指标处理 */
    onMetric?: (metric: Metric) => void
  }
}

// ==================== 上报数据类型 ====================

/** 上报数据类型（从 reporter 模块重新导出） */
export type ReportType = `${REPORT_TYPE}`

/** 上报数据（从 reporter 模块重新导出） */
export type ReportData = ReporterReportData

/** 性能上报数据 */
export interface PerformanceReportData extends ReportData {
  type: `${REPORT_TYPE.PERFORMANCE}`
  data: {
    /** 指标类型 */
    metricType: `${PERFORMANCE_TYPE}`
    /** 指标数据 */
    metrics:
      | Metric
      | NavigationMetrics
      | ResourceMetrics[]
      | LongTaskMetrics
      | number
      | { duration: number; timestamp: number }
  }
}

/** 错误上报数据 */
export interface ErrorReportData extends ReportData {
  type: `${REPORT_TYPE.ERROR}`
  data: ErrorInfo
}

/** 请求上报数据 */
export interface RequestReportData extends ReportData {
  type: `${REPORT_TYPE.REQUEST}`
  data: RequestInfo
}

/** 行为上报数据 */
export interface BehaviorReportData extends ReportData {
  type: `${REPORT_TYPE.BEHAVIOR}`
  data: BehaviorInfo[]
}

// ==================== Web Vitals 阈值 ====================

/** Web Vitals 阈值配置 */
export const WEB_VITALS_THRESHOLDS = {
  LCP: { good: 2500, poor: 4000 },
  FID: { good: 100, poor: 300 },
  CLS: { good: 0.1, poor: 0.25 },
  FCP: { good: 1800, poor: 3000 },
  INP: { good: 200, poor: 500 },
  TTFB: { good: 800, poor: 1800 },
  FP: { good: 1000, poor: 2500 },
} as const

// ==================== 扩展全局类型 ====================

/** PerformanceEventTiming 扩展 */
export interface PerformanceEventTimingExt extends PerformanceEntry {
  readonly processingStart: number
  readonly processingEnd: number
  readonly interactionId: number
  readonly cancelable: boolean
  readonly target: Node | null
}

/** LayoutShift 扩展 */
export interface LayoutShiftExt extends PerformanceEntry {
  readonly value: number
  readonly hadRecentInput: boolean
  readonly lastInputTime: number
  readonly sources: LayoutShiftAttributionExt[]
}

/** LayoutShift 归因 */
export interface LayoutShiftAttributionExt {
  readonly node?: Node
  readonly previousRect: DOMRectReadOnly
  readonly currentRect: DOMRectReadOnly
}

/** LargestContentfulPaint 扩展 */
export interface LargestContentfulPaintExt extends PerformanceEntry {
  readonly renderTime: number
  readonly loadTime: number
  readonly size: number
  readonly id: string
  readonly url: string
  readonly element: Element | null
}

/** PerformanceLongTaskTiming 扩展 */
export interface PerformanceLongTaskTimingExt extends PerformanceEntry {
  readonly attribution: TaskAttributionTimingExt[]
}

/** TaskAttributionTiming 扩展 */
export interface TaskAttributionTimingExt extends PerformanceEntry {
  readonly containerType: string
  readonly containerSrc: string
  readonly containerId: string
  readonly containerName: string
}

declare global {
  interface Navigator {
    connection?: NetworkInformation
  }

  interface NetworkInformation {
    effectiveType?: string
    type?: string
    downlink?: number
    rtt?: number
    saveData?: boolean
  }

  interface Performance {
    memory?: {
      jsHeapSizeLimit: number
      totalJSHeapSize: number
      usedJSHeapSize: number
    }
  }

  interface Document {
    wasDiscarded?: boolean
  }
}

// ==================== 实例类型 ====================

/** Reporter 类型（从 reporter 模块重新导出） */
export type { default as Reporter } from '../Reporter'

/** 长任务统计结果 */
export interface LongTaskStats {
  /** 长任务数量 */
  count: number
  /** 总持续时间 */
  totalDuration: number
  /** 最大持续时间 */
  maxDuration: number
  /** 平均持续时间 */
  avgDuration: number
  /** 长任务条目列表 */
  entries: LongTaskMetrics[]
}

/** 默认配置 */
export const DEFAULT_CONFIG: SurveillanceConfig = {
  enabled: true,
  sampleRate: 1,
  reportMethod: 'beacon',
  batchSize: 10,
  reportInterval: 5000,
  maxCacheSize: 100,

  performance: {
    enabled: true,
    webVitals: true,
    resource: true,
    longTask: true,
    longTaskThreshold: 50,
    fps: false,
    jank: false,
    jankThreshold: 100,
    navigation: true,
  },

  error: {
    enabled: true,
    jsError: true,
    resourceError: true,
    promiseError: true,
    requestError: true,
    ignoreErrors: [],
  },

  request: {
    enabled: true,
    xhr: true,
    fetch: true,
    ignoreUrls: [],
    timeoutThreshold: 30000,
  },

  behavior: {
    enabled: false,
    click: true,
    scroll: true,
    input: true,
    routeChange: true,
    maxBehaviors: 100,
  },

  lifecycle: {
    enabled: false,
  },
}
