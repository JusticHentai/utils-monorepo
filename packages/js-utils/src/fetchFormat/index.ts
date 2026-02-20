import asyncFormat from '../asyncFormat'
import BaseFunction from '../BaseFunction'
import retryFormat from '../retryFormat'
import timeoutFormat from '../timeoutFormat'
import { TimeoutError } from '../timeoutFormat/interface'
import WrappedFunction from '../WrappedFunction'
import { FetchFormatOption } from './interface'

/**
 * 将函数转为 fetch 函数
 * @param fetchFn 请求函数
 * @param retryCount 重试次数
 * @param timeout 超时时间
 * @returns 返回格式化后的 fetch 函数
 */
const fetchFormat = <Fn extends BaseFunction>({
  fetchFn,
  retryCount = 3,
  timeout = 3000,
}: FetchFormatOption<Fn>): WrappedFunction<Fn, TimeoutError> => {
  return (...args: Parameters<Fn>) => {
    /** 将函数转为 [res, err] 的形式 */
    const asyncFormatFn = asyncFormat<Fn>(fetchFn)

    /** 超时 */
    const timeoutFn = timeoutFormat<Fn>({ fn: asyncFormatFn, timeout })

    /** 重试 */
    const retryFn = retryFormat<Fn>({ fn: timeoutFn, retryCount })

    return retryFn(...args)
  }
}

export default fetchFormat
