import observeFetch from './core/observeFetch'
import observeXHR from './core/observeXHR'
import type {
  ErrorCallback,
  RequestCallback,
  RequestInfo,
  RequestMonitorOptions,
  RequestStats,
  StopListening,
} from './interface'

/**
 * 网络请求监控器
 *
 * 功能特性：
 * - XMLHttpRequest 请求监控
 * - Fetch 请求监控
 * - 请求统计信息
 * - 超时和错误处理
 */
export default class RequestMonitor {
  private stoppers: StopListening[] = []
  private requests: RequestInfo[] = []
  private onRequest?: RequestCallback
  private onError?: ErrorCallback
  private options: RequestMonitorOptions

  constructor(options: RequestMonitorOptions = {}) {
    this.options = options
    this.onRequest = options.onRequest
    this.onError = options.onError
  }

  /** 请求记录回调（内部统一处理） */
  private handleRequest = (request: RequestInfo) => {
    this.requests.push(request)
    this.onRequest?.(request)
  }

  /**
   * 监控 XMLHttpRequest
   * @returns 停止监听函数
   */
  observeXHR = (): StopListening => {
    const stop = observeXHR(this.handleRequest, this.onError, this.options)
    this.stoppers.push(stop)
    return stop
  }

  /**
   * 监控 Fetch
   * @returns 停止监听函数
   */
  observeFetch = (): StopListening => {
    const stop = observeFetch(this.handleRequest, this.onError, this.options)
    this.stoppers.push(stop)
    return stop
  }

  /**
   * 监控所有网络请求（XHR + Fetch）
   * @returns 停止监听函数
   */
  observeAll = (): StopListening => {
    const xhrStop = this.observeXHR()
    const fetchStop = this.observeFetch()

    const stop = () => {
      xhrStop()
      fetchStop()
    }

    return stop
  }

  /**
   * 获取请求统计信息
   */
  getStats = (): RequestStats => {
    const total = this.requests.length
    let success = 0
    let failed = 0
    let totalDuration = 0
    let slowRequests = 0
    const byStatus: Record<number, number> = {}

    for (const req of this.requests) {
      if (req.success) {
        success++
      } else {
        failed++
      }

      totalDuration += req.duration || 0

      if ((req.duration || 0) > 3000) {
        slowRequests++
      }

      if (req.status) {
        byStatus[req.status] = (byStatus[req.status] || 0) + 1
      }
    }

    return {
      total,
      success,
      failed,
      totalDuration,
      avgDuration: total > 0 ? totalDuration / total : 0,
      slowRequests,
      byStatus,
    }
  }

  /**
   * 获取所有请求记录
   */
  getRequests = (): RequestInfo[] => [...this.requests]

  /**
   * 清空请求记录
   */
  clear = () => {
    this.requests.length = 0
  }

  /**
   * 停止所有监控
   */
  stop = () => {
    this.stoppers.forEach((stop) => stop())
    this.stoppers.length = 0
  }
}
