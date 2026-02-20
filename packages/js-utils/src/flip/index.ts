/**
 * 创建一个翻转接收参数顺序的函数
 * @param func - 要翻转参数的函数
 * @returns 返回新的函数
 * @example
 * const flipped = flip((...args) => args)
 * flipped('a', 'b', 'c', 'd')
 * // => ['d', 'c', 'b', 'a']
 */
const flip = <T extends (...args: unknown[]) => unknown>(
  func: T
): ((...args: unknown[]) => ReturnType<T>) => {
  return (...args: unknown[]): ReturnType<T> => {
    return func(...args.reverse()) as ReturnType<T>
  }
}

export default flip
