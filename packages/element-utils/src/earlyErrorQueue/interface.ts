/** 早期错误类型 */
export enum EARLY_ERROR_TYPE {
  /** JavaScript 运行时错误 */
  JS = 'js_error',
  /** 静态资源加载错误 */
  RESOURCE = 'resource_error',
  /** Promise 未处理拒绝 */
  UNHANDLED_REJECTION = 'unhandled_rejection',
  /** Reporting API 浏览器报告 */
  BROWSER_REPORT = 'browser_report',
}

/** 早期错误上报发送通道 */
export enum EARLY_ERROR_TRANSPORT {
  /** 使用 fetch 发送，适合正常运行阶段 */
  FETCH = 'fetch',
  /** 使用 sendBeacon，失败后降级 keepalive fetch */
  BEACON = 'beacon',
}

/** 早期错误队列 flush 原因 */
export enum EARLY_ERROR_FLUSH_REASON {
  /** SDK 初始化完成 */
  INIT = 'init',
  /** 页面进入隐藏状态 */
  VISIBILITY_HIDDEN = 'visibility_hidden',
  /** pagehide 触发 */
  PAGE_HIDE = 'pagehide',
  /** 手动 flush */
  MANUAL = 'manual',
}

/** 默认最大缓存条数 */
export const DEFAULT_EARLY_ERROR_MAX_COUNT = 50

/** 默认最大缓存字节数 */
export const DEFAULT_EARLY_ERROR_MAX_BYTES = 48 * 1024

/** 默认最大存活时间 */
export const DEFAULT_EARLY_ERROR_MAX_AGE = 60 * 1000

/** 默认单条堆栈最大长度 */
export const DEFAULT_EARLY_ERROR_MAX_STACK_LENGTH = 8 * 1024

/** 默认单条消息最大长度 */
export const DEFAULT_EARLY_ERROR_MAX_MESSAGE_LENGTH = 1000

/** 默认 outerHTML 最大长度 */
export const DEFAULT_EARLY_ERROR_MAX_HTML_LENGTH = 300

/** 默认隐私过滤 query key */
export const DEFAULT_EARLY_ERROR_SENSITIVE_KEYS =
  /token|ticket|sid|session|password|passwd|phone|mobile|email|idcard|identity|search|keyword|query/i

/** 视口快照 */
export interface EarlyErrorViewport {
  /** 视口宽度 */
  width: number
  /** 视口高度 */
  height: number
}

/** 网络连接快照 */
export interface EarlyErrorConnection {
  /** 网络类型 */
  effectiveType?: string
  /** 下行带宽估计 */
  downlink?: number
  /** 往返延迟估计 */
  rtt?: number
  /** 是否开启省流量模式 */
  saveData?: boolean
}

/** 早期错误基础信息 */
export interface EarlyErrorBaseEvent {
  /** 错误类型 */
  type: EARLY_ERROR_TYPE
  /** 错误消息 */
  message: string
  /** 捕获时间戳 */
  timestamp: number
  /** 当前页面 URL */
  pageUrl: string
  /** 用户代理 */
  userAgent: string
  /** 视口信息 */
  viewport?: EarlyErrorViewport
  /** 网络连接信息 */
  connection?: EarlyErrorConnection
  /** 去重后的累计次数 */
  count: number
  /** 首次发生时间 */
  firstSeen: number
  /** 最近一次发生时间 */
  lastSeen: number
  /** 自定义扩展信息 */
  extra?: Record<string, unknown>
}

/** JavaScript 早期错误 */
export interface EarlyJSErrorEvent extends EarlyErrorBaseEvent {
  type: EARLY_ERROR_TYPE.JS
  /** 出错文件 */
  filename?: string
  /** 出错行号 */
  lineno?: number
  /** 出错列号 */
  colno?: number
  /** 错误堆栈 */
  stack?: string
}

/** 资源加载早期错误 */
export interface EarlyResourceErrorEvent extends EarlyErrorBaseEvent {
  type: EARLY_ERROR_TYPE.RESOURCE
  /** 资源标签名 */
  tagName?: string
  /** 资源 URL */
  resourceUrl?: string
  /** 截断后的 outerHTML */
  outerHTML?: string
}

/** Promise 未处理拒绝早期错误 */
export interface EarlyUnhandledRejectionEvent extends EarlyErrorBaseEvent {
  type: EARLY_ERROR_TYPE.UNHANDLED_REJECTION
  /** 拒绝原因类型 */
  reasonType?: string
  /** 错误堆栈 */
  stack?: string
}

/** Reporting API 早期错误 */
export interface EarlyBrowserReportEvent extends EarlyErrorBaseEvent {
  type: EARLY_ERROR_TYPE.BROWSER_REPORT
  /** report.type */
  reportType?: string
  /** report.url */
  reportUrl?: string
  /** report.body */
  body?: unknown
}

/** 早期错误事件 */
export type EarlyErrorEvent =
  | EarlyJSErrorEvent
  | EarlyResourceErrorEvent
  | EarlyUnhandledRejectionEvent
  | EarlyBrowserReportEvent

/** 早期错误队列配置 */
export interface EarlyErrorQueueOptions {
  /** 最大缓存条数，默认值：50 */
  maxCount?: number
  /** 最大缓存字节数，默认值：49152 */
  maxBytes?: number
  /** 最大存活时间，默认值：60000 */
  maxAge?: number
  /** 单条堆栈最大长度，默认值：8192 */
  maxStackLength?: number
  /** 单条消息最大长度，默认值：1000 */
  maxMessageLength?: number
  /** 单条 HTML 最大长度，默认值：300 */
  maxHtmlLength?: number
  /** 需要过滤的 URL query key */
  sensitiveKeys?: RegExp
  /** 入队前过滤，返回 false 时丢弃 */
  beforeEnqueue?: (event: EarlyErrorEvent) => EarlyErrorEvent | false
}

/** 早期错误队列统计 */
export interface EarlyErrorQueueStats {
  /** 当前队列条数 */
  count: number
  /** 当前估算字节数 */
  bytes: number
  /** 因队列限制丢弃的旧事件数 */
  dropped: number
}

/** 初始化后补充的业务上下文 */
export interface EarlyErrorContext {
  /** 应用 ID */
  appId?: string
  /** 发布版本 */
  release?: string
  /** 构建 ID */
  buildId?: string
  /** 当前路由 */
  route?: string
  /** 用户 ID */
  userId?: string
  /** 会话 ID */
  sessionId?: string
  /** 实验信息 */
  experiment?: string | Record<string, unknown>
  /** 运行平台 */
  platform?: string
  /** 容器信息 */
  container?: string
  /** 其他上下文 */
  extra?: Record<string, unknown>
}

/** 补齐上下文后的早期错误 */
export type EnrichedEarlyErrorEvent = EarlyErrorEvent &
  EarlyErrorContext & {
    /** flush 时间 */
    flushedAt: number
    /** flush 原因 */
    flushReason: EARLY_ERROR_FLUSH_REASON
    /** 上报来源 */
    source: 'early_error_queue'
  }

/** 早期错误上报载荷 */
export interface EarlyErrorPayload {
  /** 上报来源 */
  source: 'early_error_queue'
  /** flush 原因 */
  reason: EARLY_ERROR_FLUSH_REASON
  /** 业务上下文 */
  context: EarlyErrorContext
  /** 错误事件 */
  events: EnrichedEarlyErrorEvent[]
  /** 队列统计 */
  stats?: EarlyErrorQueueStats
}

/** flush 配置 */
export interface FlushEarlyErrorsOptions {
  /** 上报地址 */
  url: string
  /** 业务上下文 */
  context?: EarlyErrorContext
  /** flush 原因 */
  reason?: EARLY_ERROR_FLUSH_REASON
  /** 发送通道 */
  transport?: EARLY_ERROR_TRANSPORT
  /** 是否携带 cookie */
  credentials?: RequestCredentials
  /** 发送前处理，返回 false 时取消发送 */
  beforeSend?: (payload: EarlyErrorPayload) => EarlyErrorPayload | false
}

/** 发送结果 */
export interface EarlyErrorSendResult {
  /** 是否成功 */
  success: boolean
  /** 使用的通道 */
  transport: EARLY_ERROR_TRANSPORT
  /** 实际发送条数 */
  count: number
  /** 载荷字节数 */
  bytes: number
}

/** window 上的早期错误队列句柄 */
export interface EarlyErrorGlobalQueue {
  /** 推入事件 */
  push: (event: Partial<EarlyErrorEvent>) => void
  /** 读取并清空事件 */
  take: () => EarlyErrorEvent[]
  /** 仅读取事件，不清空 */
  peek?: () => EarlyErrorEvent[]
  /** 停止早期监听 */
  stop?: () => void
  /** 获取统计 */
  getStats?: () => EarlyErrorQueueStats
}

/** 全局队列读取配置 */
export interface TakeGlobalEarlyErrorsOptions {
  /** 全局变量名，默认值：__EARLY_ERROR_QUEUE__ */
  globalName?: string
  /** 读取后是否停止 bootstrap 监听，默认值：true */
  stopAfterTake?: boolean
}
