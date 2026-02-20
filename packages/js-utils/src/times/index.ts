/**
 * 调用迭代函数 n 次，返回每次调用结果组成的数组
 *
 * @description
 * 迭代函数接收一个参数：当前迭代的索引（从 0 开始）。
 *
 * @example
 * ```ts
 * import times from '@utils/js-utils/times'
 *
 * times(3, String)
 * // => ['0', '1', '2']
 *
 * times(4, () => 0)
 * // => [0, 0, 0, 0]
 *
 * times(3, (i) => i * 2)
 * // => [0, 2, 4]
 * ```
 *
 * @param n - 调用迭代函数的次数
 * @param iteratee - 每次迭代时调用的函数
 * @returns 返回结果数组
 */
const times = <T>(n: number, iteratee: (index: number) => T): T[] => {
  if (n < 1) return []

  const result: T[] = []

  for (let i = 0; i < n; i++) {
    result.push(iteratee(i))
  }

  return result
}

export default times
