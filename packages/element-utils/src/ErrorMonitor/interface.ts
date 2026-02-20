/** 错误类型 */
export enum ERROR_TYPE {
  /** JavaScript 运行时错误 */
  JS = 'JS',
  /** 资源加载错误 */
  RESOURCE = 'RESOURCE',
  /** Promise 未处理拒绝错误 */
  PROMISE = 'PROMISE',
  /** console.error 调用 */
  CONSOLE = 'CONSOLE',
}

/** 资源标签名 */
export enum RESOURCE_TAG {
  /** 脚本 */
  SCRIPT = 'SCRIPT',
  /** 样式表 */
  LINK = 'LINK',
  /** 图片 */
  IMG = 'IMG',
  /** 视频 */
  VIDEO = 'VIDEO',
  /** 音频 */
  AUDIO = 'AUDIO',
}

/** 错误信息 */
export interface ErrorInfo {
  /** 错误类型 */
  type: ERROR_TYPE
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
  type: ERROR_TYPE.JS
  /** 文件名 */
  filename?: string
  /** 行号 */
  lineno?: number
  /** 列号 */
  colno?: number
}

/** 资源加载错误信息 */
export interface ResourceErrorInfo extends ErrorInfo {
  type: ERROR_TYPE.RESOURCE
  /** 资源 URL */
  resourceUrl: string
  /** 资源类型 */
  resourceType: string
}

/** Promise 错误信息 */
export interface PromiseErrorInfo extends ErrorInfo {
  type: ERROR_TYPE.PROMISE
  /** 原因 */
  reason: unknown
}

/** Console 错误信息 */
export interface ConsoleErrorInfo extends ErrorInfo {
  type: ERROR_TYPE.CONSOLE
}

/** 所有错误信息联合类型 */
export type AnyErrorInfo =
  | JSErrorInfo
  | ResourceErrorInfo
  | PromiseErrorInfo
  | ConsoleErrorInfo
export type ErrorCallback<T extends ErrorInfo = ErrorInfo> = (error: T) => void

/** 停止监听函数类型 */
export type StopListening = () => void

/** 错误监控配置选项 */
export interface ErrorMonitorOptions {
  /** 是否监控 JS 错误，默认值：true */
  jsError?: boolean
  /** 是否监控资源加载错误，默认值：true */
  resourceError?: boolean
  /** 是否监控 Promise 错误，默认值：true */
  promiseError?: boolean
  /** 是否监控 console.error，默认值：false */
  consoleError?: boolean
  /** 错误过滤器，返回 false 则忽略该错误 */
  errorFilter?: (error: ErrorInfo) => boolean
}

/** 错误去重配置选项 */
export interface ErrorDedupeOptions {
  /** 去重时间窗口（ms），默认值：60000 */
  timeWindow?: number
  /** 最大记录数，默认值：100 */
  maxSize?: number
}
