/**
 * 带超时机制的异步函数执行器
 * @param {Function} fn - 需要执行的异步函数
 * @param {number} ms - 超时时间（毫秒）
 * @returns {Promise<any>} - 返回最先完成的结果或超时错误
 */
const timeout = (fn: () => Promise<any>, ms: number) => {
  // 使用 Promise.race 竞速执行
  return Promise.race([
    fn(),
    new Promise((_resolve, reject) =>
      setTimeout(() => reject(new Error('请求超时')), ms)
    ),
  ])
}

export default timeout
