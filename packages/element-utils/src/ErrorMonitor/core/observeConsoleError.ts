import type { ErrorCallback, ErrorInfo, StopListening } from '../interface'
import { ERROR_TYPE } from '../interface'

/**
 * 监控 console.error
 * @param callback - 错误回调函数
 * @returns 停止监听函数
 */
const observeConsoleError = (callback: ErrorCallback): StopListening => {
  const originalError = console.error

  console.error = (...args: unknown[]) => {
    const message = args
      .map((arg) =>
        typeof arg === 'object' ? JSON.stringify(arg) : String(arg)
      )
      .join(' ')

    const errorInfo: ErrorInfo = {
      type: ERROR_TYPE.CONSOLE,
      message,
      timestamp: Date.now(),
      pageUrl: window.location.href,
      userAgent: navigator.userAgent,
    }

    callback(errorInfo)

    // 调用原始方法
    originalError.apply(console, args)
  }

  return () => {
    console.error = originalError
  }
}

export default observeConsoleError
