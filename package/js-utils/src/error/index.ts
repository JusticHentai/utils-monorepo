import isFunction from '../is/isFunction'
import collectionErrorCallback from './collectionErrorCallback'
import collectRejectError from './collectRejectError'
import collectRuntimeError from './collectRuntimeError'
import { Options } from './types'

export const errorCollection = (options: Options) => {
  const { runtime, reject, consoleError } = options

  // JS运行时错误和资源加载错误
  if (runtime) {
    isFunction(runtime)
      ? collectRuntimeError(runtime)
      : collectRuntimeError(collectionErrorCallback)
  }

  // promise 被 reject 并且错误信息没有被处理的时候，会抛出一个 unhandledrejection 事件
  if (reject) {
    isFunction(reject)
      ? collectRejectError(reject)
      : collectRejectError(collectionErrorCallback)
  }

  if (consoleError) {
    isFunction(consoleError)
      ? collectRejectError(consoleError)
      : collectRejectError(collectionErrorCallback)
  }
}

export default errorCollection
