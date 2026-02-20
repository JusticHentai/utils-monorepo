/**
 * 创建一个函数，调用给定函数数组并返回结果数组
 * @param iteratees - 要调用的函数数组
 * @returns 返回新的函数
 * @example
 * const func = over([Math.max, Math.min])
 * func(1, 2, 3, 4)
 * // => [4, 1]
 */
const over = <T extends ((...args: unknown[]) => unknown)[]>(
  iteratees: T
): ((...args: unknown[]) => unknown[]) => {
  return (...args: unknown[]): unknown[] => {
    return iteratees.map((iteratee) => iteratee(...args))
  }
}

export default over
