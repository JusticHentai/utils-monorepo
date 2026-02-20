import BaseFunction from '../BaseFunction'
import WrappedFunction from '../WrappedFunction'

export interface RetryFormatOption<Fn extends BaseFunction> {
  /** 请求函数 */
  fn: WrappedFunction<Fn>
  /** 重试次数 */
  retryCount: number
}
