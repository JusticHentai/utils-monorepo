import BaseFunction from '../BaseFunction'

/**
 * 重试选项
 * @param Fn 函数类型
 * @param params 函数参数
 * @param retryCount 重试次数
 */
export interface RetryOptions<Fn extends BaseFunction> {
  fn: Fn
  params: Parameters<Fn>
  retryCount?: number
}

/**
 * 重试结果
 * @param Fn 函数类型
 * @param res 函数返回结果
 * @param err 函数错误信息
 */
export type RetryResult<Fn extends BaseFunction> = Promise<
  [Awaited<ReturnType<Fn>>, undefined] | [undefined, any]
>
