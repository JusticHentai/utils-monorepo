import formatStack from '../../formatStack'
import type { ErrorCallback, JSErrorInfo, StopListening } from '../interface'
import { ERROR_TYPE } from '../interface'

/**
 * 监控 JS 错误
 * @param callback - 错误回调函数
 * @returns 停止监听函数
 */
const observeJSError = (
  callback: ErrorCallback<JSErrorInfo>
): StopListening => {
  const handler = (event: ErrorEvent) => {
    const { message, filename, lineno, colno, error } = event

    const errorInfo: JSErrorInfo = {
      type: ERROR_TYPE.JS,
      message,
      timestamp: Date.now(),
      pageUrl: window.location.href,
      userAgent: navigator.userAgent,
      filename,
      lineno,
      colno,
      stack: formatStack(error?.stack),
    }

    callback(errorInfo)
  }

  window.addEventListener('error', handler)

  return () => {
    window.removeEventListener('error', handler)
  }
}

export default observeJSError
