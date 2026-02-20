/**
 * 创建一个最多接受 n 个参数的函数，忽略多余的参数
 * @param func - 要限制参数的函数
 * @param n - 限制的参数个数，默认为 func.length
 * @returns 返回新的限制函数
 * @example
 * ['6', '8', '10'].map(ary(parseInt, 1))
 * // => [6, 8, 10]
 */
const ary = <T extends (...args: unknown[]) => unknown>(
  func: T,
  n: number = func.length,
): ((...args: unknown[]) => ReturnType<T>) => {
  return (...args: unknown[]): ReturnType<T> => {
    return func(...args.slice(0, n)) as ReturnType<T>
  }
}

export default ary
