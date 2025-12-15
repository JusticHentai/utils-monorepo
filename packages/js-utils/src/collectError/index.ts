import isFunction from '../isFunction'
import collectRejectError from './core/collectRejectError'
import collectRuntimeError from './core/collectRuntimeError'
import handleError from './core/handleError'
import { Options } from './interface'

export const collectError = (options: Options) => {
  const { runtime, reject } = options

  // JS运行时错误和资源加载错误
  if (isFunction(runtime)) {
    collectRuntimeError(runtime)
  } else {
    collectRuntimeError(handleError)
  }

  // promise 被 reject 并且错误信息没有被处理的时候，会抛出一个 unhandledrejection 事件
  if (isFunction(reject)) {
    collectRejectError(reject)
  } else {
    collectRejectError(handleError)
  }
}

export default collectError
