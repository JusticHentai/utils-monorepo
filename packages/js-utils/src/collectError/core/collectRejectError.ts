import isObject from '@/isObject'
import isString from '@/isString'
import { ErrorCallback } from '../interface'

/**
 * promise 被 reject 并且错误信息没有被处理的时候，会抛出一个 unhandledrejection 事件
 */
const collectRejectError = (cb: ErrorCallback) => {
  window.addEventListener<'unhandledrejection'>(
    'unhandledrejection',
    (promiseRejectionEvent: PromiseRejectionEvent) => {
      const { reason } = promiseRejectionEvent

      let errorLog = ''

      if (isString(reason)) {
        errorLog = reason
      } else if (isObject(reason)) {
        errorLog = JSON.stringify(reason)
      } else {
        errorLog = '未知类型报错'
      }

      cb(`[PromiseRejectError]: ${errorLog}`)
    }
  )
}

export default collectRejectError
