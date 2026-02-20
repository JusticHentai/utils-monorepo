/**
 * 创建一个函数，返回第 n 个参数
 *
 * @description
 * 如果 n 为负数，则返回从末尾开始的第 n 个参数。
 *
 * @example
 * ```ts
 * import nthArg from '@utils/js-utils/nthArg'
 *
 * const func = nthArg(1)
 * func('a', 'b', 'c', 'd')
 * // => 'b'
 *
 * const func2 = nthArg(-2)
 * func2('a', 'b', 'c', 'd')
 * // => 'c'
 * ```
 *
 * @param n - 要返回的参数索引
 * @returns 返回新的函数
 */
const nthArg = (n: number = 0): ((...args: unknown[]) => unknown) => {
  return (...args: unknown[]): unknown => {
    const index = n < 0 ? args.length + n : n
    return args[index]
  }
}

export default nthArg
