import { isObject, isString } from '@justichentai/is'
import { ErrorCallback } from '../types'

/**
 * promise 被 reject 并且错误信息没有被处理的时候，会抛出一个 unhandledrejection 事件
 */
export default function collectRejectError(cb: ErrorCallback) {
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
