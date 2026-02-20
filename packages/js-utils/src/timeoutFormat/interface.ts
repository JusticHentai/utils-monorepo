import BaseFunction from '../BaseFunction'
import WrappedFunction from '../WrappedFunction'

export interface TimeoutFormatOption<Fn extends BaseFunction> {
  /** 请求函数 */
  fn: WrappedFunction<Fn>
  /** 超时时间 */
  timeout: number
}

export enum ERROR_TYPE {
  TIMEOUT,
  NORMAL_ERROR,
}

/** 超时错误标识 */
export interface TimeoutError {
  errorType: ERROR_TYPE
  error: any
}
