import BaseFunction from '../BaseFunction'

export interface FetchFormatOption<Fn extends BaseFunction> {
  /** 请求函数 */
  fetchFn: Fn
  /** 重试次数 默认 3 次 */
  retryCount?: number
  /** 超时时间 默认 3000 毫秒 */
  timeout?: number
}
