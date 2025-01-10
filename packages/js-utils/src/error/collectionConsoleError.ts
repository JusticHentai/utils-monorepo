import { ErrorCallback } from '../types'

/**
 * 收集 console.error 中的报错
 * 重写了 window.console.error 一般不建议使用
 */
export default function collectionConsoleError(cb: ErrorCallback) {
  const _oldConsoleError = window.console.error

  window.console.error = (...params: any[]) => {
    const errorLog = Object.values(params).join(',')

    cb(errorLog)

    _oldConsoleError && _oldConsoleError.apply(window, params)
  }
}
