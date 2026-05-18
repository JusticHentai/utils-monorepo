import estimateBytes from '../estimateBytes'
import enrichEarlyErrors from './browser/enrichEarlyErrors'
import takeGlobalEarlyErrors from './browser/takeGlobalEarlyErrors'
import getErrorKey from './core/getErrorKey'
import sanitizeEvent from './core/sanitizeEvent'
import type {
  EarlyErrorEvent,
  EarlyErrorPayload,
  EarlyErrorQueueOptions,
  EarlyErrorQueueStats,
  FlushEarlyErrorsOptions,
} from './interface'
import {
  DEFAULT_EARLY_ERROR_MAX_AGE,
  DEFAULT_EARLY_ERROR_MAX_BYTES,
  DEFAULT_EARLY_ERROR_MAX_COUNT,
  DEFAULT_EARLY_ERROR_MAX_HTML_LENGTH,
  DEFAULT_EARLY_ERROR_MAX_MESSAGE_LENGTH,
  DEFAULT_EARLY_ERROR_MAX_STACK_LENGTH,
  DEFAULT_EARLY_ERROR_SENSITIVE_KEYS,
  EARLY_ERROR_FLUSH_REASON,
  EARLY_ERROR_TRANSPORT,
} from './interface'
import sendEarlyErrorPayload from './transport/sendEarlyErrorPayload'

type EarlyErrorQueueRuntimeOptions = {
  maxCount: number
  maxBytes: number
  maxAge: number
  maxStackLength: number
  maxMessageLength: number
  maxHtmlLength: number
  sensitiveKeys: RegExp
  beforeEnqueue: EarlyErrorQueueOptions['beforeEnqueue']
}

/**
 * 初始错误上报缓存队列
 *
 * 用于在监控 SDK 初始化完成后接管 inline bootstrap 暂存的早期错误，
 * 补齐业务上下文并统一上报。
 */
export default class EarlyErrorQueue {
  private readonly options: EarlyErrorQueueRuntimeOptions
  private readonly installedAt = Date.now()
  private readonly queue: EarlyErrorEvent[] = []
  private readonly keys = new Map<string, EarlyErrorEvent>()
  private bytes = 0
  private dropped = 0

  constructor(options: EarlyErrorQueueOptions = {}) {
    this.options = {
      maxCount: options.maxCount ?? DEFAULT_EARLY_ERROR_MAX_COUNT,
      maxBytes: options.maxBytes ?? DEFAULT_EARLY_ERROR_MAX_BYTES,
      maxAge: options.maxAge ?? DEFAULT_EARLY_ERROR_MAX_AGE,
      maxStackLength:
        options.maxStackLength ?? DEFAULT_EARLY_ERROR_MAX_STACK_LENGTH,
      maxMessageLength:
        options.maxMessageLength ?? DEFAULT_EARLY_ERROR_MAX_MESSAGE_LENGTH,
      maxHtmlLength:
        options.maxHtmlLength ?? DEFAULT_EARLY_ERROR_MAX_HTML_LENGTH,
      sensitiveKeys:
        options.sensitiveKeys ?? DEFAULT_EARLY_ERROR_SENSITIVE_KEYS,
      beforeEnqueue: options.beforeEnqueue,
    }
  }

  private recalculateBytes = (): void => {
    this.bytes = estimateBytes(this.queue)
  }

  private removeFirst = (): void => {
    const removed = this.queue.shift()
    if (!removed) return

    this.keys.delete(getErrorKey(removed))
    this.dropped += 1
    this.recalculateBytes()
  }

  private trimQueue = (): void => {
    this.recalculateBytes()

    while (
      this.queue.length > this.options.maxCount ||
      this.bytes > this.options.maxBytes
    ) {
      this.removeFirst()
    }
  }

  private getStats = (): EarlyErrorQueueStats => ({
    count: this.queue.length,
    bytes: this.bytes,
    dropped: this.dropped,
  })

  /**
   * 推入错误事件
   * @param event - 早期错误事件
   * @returns 是否入队成功
   */
  push = (event: EarlyErrorEvent): boolean => {
    if (Date.now() - this.installedAt > this.options.maxAge) return false

    const sanitizedEvent = sanitizeEvent(event, this.options)
    const filteredEvent = this.options.beforeEnqueue
      ? this.options.beforeEnqueue(sanitizedEvent)
      : sanitizedEvent

    if (!filteredEvent) return false

    const key = getErrorKey(filteredEvent)
    const existingEvent = this.keys.get(key)

    if (existingEvent) {
      existingEvent.count += 1
      existingEvent.lastSeen = filteredEvent.timestamp
      this.recalculateBytes()
      return true
    }

    this.queue.push(filteredEvent)
    this.keys.set(key, filteredEvent)
    this.trimQueue()
    return true
  }

  /**
   * 接管 window 上的 inline bootstrap 队列
   * @returns 接管的事件数量
   */
  captureGlobal = (): number => {
    const events = takeGlobalEarlyErrors()
    events.forEach((event) => this.push(event))
    return events.length
  }

  /**
   * 读取并清空队列
   * @returns 早期错误列表
   */
  take = (): EarlyErrorEvent[] => {
    const events = this.queue.slice()
    this.queue.length = 0
    this.keys.clear()
    this.bytes = 0
    return events
  }

  /**
   * 仅读取队列
   * @returns 早期错误列表
   */
  peek = (): EarlyErrorEvent[] => this.queue.slice()

  /** 清空队列 */
  clear = (): void => {
    this.queue.length = 0
    this.keys.clear()
    this.bytes = 0
  }

  /**
   * 构建上报 payload
   * @param options - flush 配置
   * @returns 上报载荷
   */
  createPayload = (
    options: Omit<
      FlushEarlyErrorsOptions,
      'url' | 'transport' | 'credentials'
    > = {}
  ): EarlyErrorPayload => {
    const reason = options.reason ?? EARLY_ERROR_FLUSH_REASON.INIT
    const context = options.context ?? {}
    const stats = this.getStats()
    const events = enrichEarlyErrors(this.take(), context, reason)

    return {
      source: 'early_error_queue',
      reason,
      context,
      events,
      stats,
    }
  }

  /**
   * 发送并清空当前队列
   * @param options - flush 配置
   * @returns 发送结果
   */
  flush = async (options: FlushEarlyErrorsOptions) => {
    const payload = this.createPayload(options)
    const processedPayload = options.beforeSend
      ? options.beforeSend(payload)
      : payload

    if (!processedPayload) {
      return {
        success: false,
        transport: options.transport ?? EARLY_ERROR_TRANSPORT.FETCH,
        count: 0,
        bytes: 0,
      }
    }

    return sendEarlyErrorPayload(
      options.url,
      processedPayload,
      options.transport,
      options.credentials
    )
  }
}

export {
  DEFAULT_EARLY_ERROR_MAX_AGE,
  DEFAULT_EARLY_ERROR_MAX_BYTES,
  DEFAULT_EARLY_ERROR_MAX_COUNT,
  DEFAULT_EARLY_ERROR_MAX_HTML_LENGTH,
  DEFAULT_EARLY_ERROR_MAX_MESSAGE_LENGTH,
  DEFAULT_EARLY_ERROR_MAX_STACK_LENGTH,
  DEFAULT_EARLY_ERROR_SENSITIVE_KEYS,
  EARLY_ERROR_FLUSH_REASON,
  EARLY_ERROR_TRANSPORT,
  EARLY_ERROR_TYPE,
} from './interface'
export type {
  EarlyBrowserReportEvent,
  EarlyErrorConnection,
  EarlyErrorContext,
  EarlyErrorEvent,
  EarlyErrorGlobalQueue,
  EarlyErrorPayload,
  EarlyErrorQueueOptions,
  EarlyErrorQueueStats,
  EarlyErrorSendResult,
  EarlyErrorViewport,
  EarlyJSErrorEvent,
  EarlyResourceErrorEvent,
  EarlyUnhandledRejectionEvent,
  EnrichedEarlyErrorEvent,
  FlushEarlyErrorsOptions,
  TakeGlobalEarlyErrorsOptions,
} from './interface'
export { enrichEarlyErrors, sendEarlyErrorPayload, takeGlobalEarlyErrors }
