/**
 * 创建一个取反谓词函数的函数
 * @param predicate - 要取反的谓词函数
 * @returns 返回新的取反谓词函数
 * @example
 * const isEven = n => n % 2 === 0
 * const numbers = [1, 2, 3, 4, 5, 6]
 *
 * numbers.filter(negate(isEven))
 * // => [1, 3, 5]
 */
const negate = <T extends (...args: unknown[]) => boolean>(
  predicate: T
): ((...args: Parameters<T>) => boolean) => {
  return (...args: Parameters<T>): boolean => {
    return !predicate(...args)
  }
}

export default negate
