/** 请求类型 */
export enum REQUEST_TYPE {
  /** XMLHttpRequest 请求 */
  AJAX,
  /** Fetch 请求 */
  FETCH,
}

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

/** 请求错误信息 */
export interface RequestErrorInfo {
  /** 错误类型 */
  type: 'ajax' | 'fetch'
  /** 错误消息 */
  message: string
  /** 发生时间 */
  timestamp: number
  /** 页面 URL */
  pageUrl: string
  /** 用户代理 */
  userAgent: string
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

/** 扩展 XMLHttpRequest，挂载监控元数据 */
export interface ExtendedXHR extends XMLHttpRequest {
  __surveillance__?: {
    method: string
    url: string
    headers: Record<string, string>
    startTime: number
    body?: unknown
  }
}

/** 请求回调函数类型 */
export type RequestCallback = (request: RequestInfo) => void

/** 错误回调函数类型 */
export type ErrorCallback = (error: RequestErrorInfo) => void

/** 停止监听函数类型 */
export type StopListening = () => void

/** 请求监控配置选项 */
export interface RequestMonitorOptions {
  /** 请求完成回调 */
  onRequest?: RequestCallback
  /** 错误回调 */
  onError?: ErrorCallback
  /** 忽略的 URL 列表 */
  ignoreUrls?: (string | RegExp)[]
  /** 超时阈值 (ms)，默认值：30000 */
  timeoutThreshold?: number
}

/** 请求统计信息 */
export interface RequestStats {
  /** 总请求数 */
  total: number
  /** 成功数 */
  success: number
  /** 失败数 */
  failed: number
  /** 总耗时 */
  totalDuration: number
  /** 平均耗时 */
  avgDuration: number
  /** 慢请求数（>3s） */
  slowRequests: number
  /** 按状态码统计 */
  byStatus: Record<number, number>
}
