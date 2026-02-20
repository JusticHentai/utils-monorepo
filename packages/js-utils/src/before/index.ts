/**
 * 创建一个函数，最多只能调用 n 次
 * @param n - 在限制前允许调用的次数
 * @param func - 要限制的函数
 * @returns 返回新的限制函数
 * @example
 * const initialize = before(5, () => console.log('Initializing'))
 * // 只有前 4 次调用会执行
 */
const before = <T extends (...args: unknown[]) => unknown>(
  n: number,
  func: T
): ((...args: Parameters<T>) => ReturnType<T> | undefined) => {
  let result: ReturnType<T> | undefined
  let count = 0

  return (...args: Parameters<T>): ReturnType<T> | undefined => {
    count++
    if (count < n) {
      result = func(...args) as ReturnType<T>
    }
    return result
  }
}

export default before
