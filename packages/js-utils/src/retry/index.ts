import awaitFormat from '../awaitFormat'

/**
 * 重试函数
 * 会执行请求
 * 如果函数执行失败，则重试，直到成功为止，如果重试次数达到上限，则返回最后一次错误信息
 * @param fn 函数
 * @param retryCount 重试次数
 * @returns 返回 [res, err] 的形式
 */
const retry = async <T>(
  fn: () => Promise<T>,
  retryCount: number = 3
): Promise<[T, undefined] | [undefined, any]> => {
  const formatFn = awaitFormat<any, T>(fn)

  let count = retryCount
  let error

  while (count) {
    const [res, err] = await formatFn()

    if (res) {
      return [res, undefined]
    }

    error = err
    count--
  }

  return [undefined, error]
}

export default retry
