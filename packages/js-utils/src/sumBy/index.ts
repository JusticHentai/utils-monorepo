/**
 * 类似于 sum，但可以指定迭代器
 * @param array - 要迭代的数组
 * @param iteratee - 迭代器函数
 * @returns 返回总和
 * @example
 * const objects = [{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }]
 * sumBy(objects, o => o.n)
 * // => 20
 */
const sumBy = <T>(array: T[], iteratee: (value: T) => number): number => {
  if (!array?.length) {
    return 0
  }

  let total = 0
  for (const value of array) {
    total += iteratee(value)
  }

  return total
}

export default sumBy
