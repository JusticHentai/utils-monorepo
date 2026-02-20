/**
 * XMLHttpRequest 监控
 */

import createEventListener from '../../createEventListener'
import matchPattern from '../../matchPattern'
import type {
  ErrorCallback,
  ExtendedXHR,
  RequestInfo as ReqInfo,
  RequestCallback,
  RequestMonitorOptions,
  StopListening,
} from '../interface'

/**
 * 监控 XMLHttpRequest
 * @param onRequest - 请求完成回调
 * @param onError - 错误回调（可选）
 * @param options - 配置选项
 * @returns 停止监听函数
 */
const observeXHR = (
  onRequest: RequestCallback,
  onError?: ErrorCallback,
  options?: RequestMonitorOptions
): StopListening => {
  const { ignoreUrls = [], timeoutThreshold = 30000 } = options || {}

  const originalOpen = XMLHttpRequest.prototype.open
  const originalSend = XMLHttpRequest.prototype.send
  const originalSetRequestHeader = XMLHttpRequest.prototype.setRequestHeader

  XMLHttpRequest.prototype.open = function (
    this: ExtendedXHR,
    method: string,
    url: string | URL,
    async?: boolean,
    username?: string | null,
    password?: string | null
  ) {
    const urlString = typeof url === 'string' ? url : url.toString()

    this.__surveillance__ = {
      method,
      url: urlString,
      headers: {},
      startTime: 0,
    }

    return originalOpen.call(
      this,
      method,
      url,
      async ?? true,
      username ?? null,
      password ?? null
    )
  }

  XMLHttpRequest.prototype.setRequestHeader = function (
    this: ExtendedXHR,
    name: string,
    value: string
  ) {
    if (this.__surveillance__) {
      this.__surveillance__.headers[name] = value
    }
    return originalSetRequestHeader.call(this, name, value)
  }

  XMLHttpRequest.prototype.send = function (
    this: ExtendedXHR,
    body?: Document | XMLHttpRequestBodyInit | null
  ) {
    const meta = this.__surveillance__

    if (!meta) {
      return originalSend.call(this, body)
    }

    // 检查是否需要忽略
    if (ignoreUrls.length && matchPattern(meta.url, ignoreUrls)) {
      return originalSend.call(this, body)
    }

    meta.startTime = performance.now()
    meta.body = body

    // 监听完成事件
    createEventListener(this, 'loadend', () => {
      const endTime = performance.now()
      const duration = endTime - meta.startTime
      const success = this.status >= 200 && this.status < 300

      const requestInfo: ReqInfo = {
        url: meta.url,
        method: meta.method,
        headers: meta.headers,
        body: meta.body,
        startTime: meta.startTime,
        endTime,
        duration,
        status: this.status,
        responseSize: this.response ? new Blob([this.response]).size : 0,
        success,
      }

      onRequest(requestInfo)

      // 上报错误
      if (!success && onError) {
        onError({
          type: 'ajax',
          message: `XHR Error: ${this.status} ${this.statusText}`,
          timestamp: Date.now(),
          pageUrl: window.location.href,
          userAgent: navigator.userAgent,
          requestUrl: meta.url,
          method: meta.method,
          status: this.status,
          response:
            typeof this.response === 'string'
              ? this.response.slice(0, 1000)
              : undefined,
          duration,
        })
      }
    })

    // 监听超时
    createEventListener(this, 'timeout', () => {
      if (onError) {
        onError({
          type: 'ajax',
          message: `XHR Timeout: ${meta.url}`,
          timestamp: Date.now(),
          pageUrl: window.location.href,
          userAgent: navigator.userAgent,
          requestUrl: meta.url,
          method: meta.method,
          duration: timeoutThreshold,
        })
      }
    })

    // 监听错误
    createEventListener(this, 'error', () => {
      if (onError) {
        onError({
          type: 'ajax',
          message: `XHR Network Error: ${meta.url}`,
          timestamp: Date.now(),
          pageUrl: window.location.href,
          userAgent: navigator.userAgent,
          requestUrl: meta.url,
          method: meta.method,
        })
      }
    })

    return originalSend.call(this, body)
  }

  return () => {
    XMLHttpRequest.prototype.open = originalOpen
    XMLHttpRequest.prototype.send = originalSend
    XMLHttpRequest.prototype.setRequestHeader = originalSetRequestHeader
  }
}

export default observeXHR
