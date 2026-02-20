/**
 * 创建一个函数，检查所有断言函数是否都对给定参数返回 true
 * @param predicates - 要检查的断言函数数组
 * @returns 返回新的函数
 * @example
 * const isPositiveInt = overEvery([
 *   (n: number) => n > 0,
 *   (n: number) => Number.isInteger(n)
 * ])
 * isPositiveInt(1)
 * // => true
 */
const overEvery = <T extends ((...args: unknown[]) => boolean)[]>(
  predicates: T
): ((...args: unknown[]) => boolean) => {
  return (...args: unknown[]): boolean => {
    return predicates.every((predicate) => predicate(...args))
  }
}

export default overEvery
