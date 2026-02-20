import BaseFunction from '../BaseFunction'
import WrappedFunction from '../WrappedFunction'

/**
 * 将 fn 转为返回 [res, err] 的形式
 * @param fn 函数
 * @returns 返回 [res, err] 的形式
 */
const asyncFormat = <Fn extends BaseFunction>(fn: Fn): WrappedFunction<Fn> => {
  return async (...params: Parameters<Fn>) => {
    try {
      const res = await fn(...params)
      return [res, undefined]
    } catch (err) {
      return [undefined, err]
    }
  }
}

export default asyncFormat
