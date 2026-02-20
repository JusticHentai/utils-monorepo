import type { PageInfo } from '../getPageInfo/interface'

/** 上报方式类型 */
export enum REPORT_METHOD {
  /** Beacon API 上报 */
  BEACON = 'beacon',
  /** Fetch API 上报 */
  FETCH = 'fetch',
  /** XMLHttpRequest 上报 */
  XHR = 'xhr',
  /** Image 像素上报 */
  IMG = 'img',
}

/**
 * 上报数据类型
 * - performance: 性能数据
 * - error: 错误数据
 * - request: 请求数据
 * - behavior: 行为数据
 * - custom: 自定义数据
 */
export enum REPORT_TYPE {
  /** 性能数据 */
  PERFORMANCE = 'performance',
  /** 错误数据 */
  ERROR = 'error',
  /** 请求数据 */
  REQUEST = 'request',
  /** 行为数据 */
  BEHAVIOR = 'behavior',
  /** 自定义数据 */
  CUSTOM = 'custom',
}

/**
 * 性能指标类型
 * - webVitals: Web Vitals 核心指标
 * - navigation: 导航性能
 * - resource: 资源加载
 * - longTask: 长任务
 * - paint: 绘制指标
 * - fps: 帧率
 * - jank: 卡顿
 */
export enum PERFORMANCE_TYPE {
  /** Web Vitals 核心指标 */
  WEB_VITALS = 'webVitals',
  /** 导航性能 */
  NAVIGATION = 'navigation',
  /** 资源加载 */
  RESOURCE = 'resource',
  /** 长任务 */
  LONG_TASK = 'longTask',
  /** 绘制指标 */
  PAINT = 'paint',
  /** 帧率 */
  FPS = 'fps',
  /** 卡顿 */
  JANK = 'jank',
}

/** 上报数据 */
export interface ReportData {
  /** 数据类型 */
  type: `${REPORT_TYPE}`
  /** 应用 ID */
  appId?: string
  /** 会话 ID */
  sessionId: string
  /** 页面 ID */
  pageId: string
  /** 时间戳 */
  timestamp: number
  /** 页面信息 */
  pageInfo: PageInfo
  /** 具体数据 */
  data: unknown
}

/** 发送器配置 */
export interface SenderOptions {
  /** 上报地址 */
  url: string
  /** 上报方式 */
  method: REPORT_METHOD
}

/** 上报器配置选项 */
export interface ReporterOptions {
  /** 上报地址 */
  reportUrl: string
  /** 应用 ID */
  appId?: string
  /** 上报方式，默认值：REPORT_METHOD.BEACON */
  reportMethod?: REPORT_METHOD
  /** 批量上报阈值，默认值：10 */
  batchSize?: number
  /** 上报间隔（ms），默认值：5000 */
  reportInterval?: number
  /** 上报前处理钩子，返回 false 则取消上报 */
  beforeReport?: (data: ReportData) => ReportData | false
  /** 上报后处理钩子 */
  afterReport?: (data: ReportData, success: boolean) => void
}
