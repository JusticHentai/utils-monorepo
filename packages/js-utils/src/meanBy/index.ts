/**
 * 类似于 mean，但可以指定迭代器
 * @param array - 要迭代的数组
 * @param iteratee - 迭代器函数
 * @returns 返回平均值
 * @example
 * const objects = [{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }]
 * meanBy(objects, o => o.n)
 * // => 5
 */
const meanBy = <T>(array: T[], iteratee: (value: T) => number): number => {
  if (!array?.length) {
    return NaN
  }

  let total = 0
  for (const value of array) {
    total += iteratee(value)
  }

  return total / array.length
}

export default meanBy
