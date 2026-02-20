import isError from '@justichentai/js-utils/isError'
import isObject from '@justichentai/js-utils/isObject'
import isString from '@justichentai/js-utils/isString'
import formatStack from '../../formatStack'
import type {
  ErrorCallback,
  PromiseErrorInfo,
  StopListening,
} from '../interface'
import { ERROR_TYPE } from '../interface'

/**
 * 监控 Promise 错误
 * @param callback - 错误回调函数
 * @returns 停止监听函数
 */
const observePromiseError = (
  callback: ErrorCallback<PromiseErrorInfo>
): StopListening => {
  const handler = (event: PromiseRejectionEvent) => {
    const { reason } = event
    let message = 'Unhandled Promise Rejection'
    let stack: string | undefined

    if (isError(reason)) {
      message = reason.message
      stack = formatStack(reason.stack)
    } else if (isString(reason)) {
      message = reason
    } else if (isObject(reason)) {
      message = JSON.stringify(reason)
    }

    const errorInfo: PromiseErrorInfo = {
      type: ERROR_TYPE.PROMISE,
      message,
      timestamp: Date.now(),
      pageUrl: window.location.href,
      userAgent: navigator.userAgent,
      stack,
      reason,
    }

    callback(errorInfo)
  }

  window.addEventListener('unhandledrejection', handler)

  return () => {
    window.removeEventListener('unhandledrejection', handler)
  }
}

export default observePromiseError
