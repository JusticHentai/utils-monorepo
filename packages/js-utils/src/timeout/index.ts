/**
 * 同时执行异步函数和超时函数
 * 异步函数执行成功，则返回异步函数的结果
 * 超时函数执行成功，则返回 undefined
 * @param {Function} fn - 需要执行的异步函数
 * @param {number} ms - 超时时间（毫秒）
 * @returns {Promise<any>} - 返回最先完成的结果或超时错误
 */
const timeout = <T>(
  fn: () => Promise<T>,
  ms: number
): Promise<T | undefined> => {
  // 使用 Promise.race 竞速执行
  return Promise.race([
    fn(),
    new Promise<undefined>((resolve) =>
      setTimeout(() => resolve(undefined), ms)
    ),
  ])
}

export default timeout
