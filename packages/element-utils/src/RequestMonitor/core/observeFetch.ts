import isArray from '@justichentai/js-utils/isArray'
import isString from '@justichentai/js-utils/isString'
import isHeaders from '../../isHeaders'
import isUrl from '../../isUrl'
import matchPattern from '../../matchPattern'
import type {
  ErrorCallback,
  RequestInfo as ReqInfo,
  RequestCallback,
  RequestMonitorOptions,
  StopListening,
} from '../interface'

/**
 * 监控 Fetch
 * @param onRequest - 请求完成回调
 * @param onError - 错误回调（可选）
 * @param options - 配置选项
 * @returns 停止监听函数
 */
const observeFetch = (
  onRequest: RequestCallback,
  onError?: ErrorCallback,
  options?: RequestMonitorOptions
): StopListening => {
  const { ignoreUrls = [] } = options || {}

  const originalFetch = window.fetch

  window.fetch = async function (
    input: RequestInfo | URL,
    init?: RequestInit
  ): Promise<Response> {
    let url: string

    if (isString(input)) {
      url = input
    } else if (isUrl(input)) {
      url = input.toString()
    } else {
      url = input.url
    }

    // 需要忽略直接执行原函数
    if (ignoreUrls.length && matchPattern(url, ignoreUrls)) {
      return originalFetch.call(this, input, init)
    }

    const method = init?.method || 'GET'
    const headers: Record<string, string> = {}

    if (init?.headers) {
      if (isHeaders(init.headers)) {
        init.headers.forEach((value, key) => {
          headers[key] = value
        })
      } else if (isArray(init.headers)) {
        init.headers.forEach(([key, value]) => {
          headers[key] = value
        })
      } else {
        Object.assign(headers, init.headers)
      }
    }

    const startTime = performance.now()

    try {
      const response = await originalFetch.call(this, input, init)
      const endTime = performance.now()
      const duration = endTime - startTime

      // 克隆响应以获取大小
      const clonedResponse = response.clone()
      let responseSize = 0

      try {
        const blob = await clonedResponse.blob()
        responseSize = blob.size
      } catch {
        // 忽略大小获取失败
      }

      const success = response.ok

      const requestInfo: ReqInfo = {
        url,
        method,
        headers,
        body: init?.body,
        startTime,
        endTime,
        duration,
        status: response.status,
        responseSize,
        success,
      }

      onRequest(requestInfo)

      // 上报错误
      if (!success && onError) {
        onError({
          type: 'fetch',
          message: `Fetch Error: ${response.status} ${response.statusText}`,
          timestamp: Date.now(),
          pageUrl: window.location.href,
          userAgent: navigator.userAgent,
          requestUrl: url,
          method,
          status: response.status,
          duration,
        })
      }

      return response
    } catch (error) {
      const endTime = performance.now()
      const duration = endTime - startTime

      // 上报网络错误
      if (onError) {
        onError({
          type: 'fetch',
          message:
            error instanceof Error
              ? error.message
              : `Fetch Network Error: ${url}`,
          timestamp: Date.now(),
          pageUrl: window.location.href,
          userAgent: navigator.userAgent,
          requestUrl: url,
          method,
          duration,
        })
      }

      throw error
    }
  }

  return () => {
    window.fetch = originalFetch
  }
}

export default observeFetch
