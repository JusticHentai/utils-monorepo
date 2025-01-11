import isFunction from '../is/isFunction'
import collectRejectError from './core/collectRejectError'
import collectRuntimeError from './core/collectRuntimeError'
import handleError from './core/handleError'
import { Options } from './types'

export const collectError = (options: Options) => {
  const { runtime, reject } = options

  // JS运行时错误和资源加载错误
  if (runtime) {
    isFunction(runtime)
      ? collectRuntimeError(runtime)
      : collectRuntimeError(handleError)
  }

  // promise 被 reject 并且错误信息没有被处理的时候，会抛出一个 unhandledrejection 事件
  if (reject) {
    isFunction(reject)
      ? collectRejectError(reject)
      : collectRejectError(handleError)
  }
}

export default collectError
