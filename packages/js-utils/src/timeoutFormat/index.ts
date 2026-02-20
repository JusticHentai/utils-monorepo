import BaseFunction from '../BaseFunction'
import WrappedFunction from '../WrappedFunction'
import { ERROR_TYPE, TimeoutError, TimeoutFormatOption } from './interface'

/**
 * 将函数转为超时函数
 * @param fn 函数
 * @param timeout 超时时间
 * @returns 返回超时函数
 */
const timeoutFormat = <Fn extends BaseFunction>({
  fn,
  timeout,
}: TimeoutFormatOption<Fn>): WrappedFunction<Fn, TimeoutError> => {
  return async (...args: Parameters<WrappedFunction<Fn, TimeoutError>>) => {
    const timeoutFn = new Promise<[undefined, TimeoutError]>((resolve) =>
      setTimeout(
        () =>
          resolve([
            undefined,
            { errorType: ERROR_TYPE.TIMEOUT, error: new Error('timeout') },
          ]),
        timeout
      )
    )

    const [res, err] = await Promise.race([fn(...args), timeoutFn])

    /** 超时 */
    if (err?.errorType === ERROR_TYPE.TIMEOUT) {
      return [undefined, err]
    }

    /** 正常错误 */
    if (err) {
      return [undefined, { errorType: ERROR_TYPE.NORMAL_ERROR, error: err }]
    }

    return [res!, undefined]
  }
}

export default timeoutFormat
export { ERROR_TYPE }
