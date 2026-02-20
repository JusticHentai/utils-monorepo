import BaseFunction from '../BaseFunction'
import WrappedFunction from '../WrappedFunction'
import { RetryFormatOption } from './interface'

/**
 * 将函数转为重试函数
 * @param fn 函数
 * @param retryCount 重试次数
 * @returns 返回重试函数
 */
const retryFormat = <Fn extends BaseFunction>({
  fn,
  retryCount,
}: RetryFormatOption<Fn>): WrappedFunction<Fn> => {
  return async (...args: Parameters<WrappedFunction<Fn>>) => {
    let count = retryCount
    let error

    while (count) {
      const [res, err] = await fn(...args)

      if (res) {
        return [res, undefined]
      }

      error = err
      count--
    }

    return [undefined, error]
  }
}

export default retryFormat
