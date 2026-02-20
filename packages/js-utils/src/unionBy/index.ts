/**
 * 类似于 union，但可以指定迭代器
 * @param arrays - 要合并的数组
 * @param iteratee - 迭代器函数
 * @returns 返回新的并集数组
 * @example
 * unionBy([2.1], [1.2, 2.3], Math.floor)
 * // => [2.1, 1.2]
 */
const unionBy = <T, K>(arrays: T[][], iteratee: (value: T) => K): T[] => {
  const result: T[] = []
  const seen = new Set<K>()

  for (const array of arrays) {
    if (!array?.length) continue
    for (const value of array) {
      const computed = iteratee(value)
      if (!seen.has(computed)) {
        seen.add(computed)
        result.push(value)
      }
    }
  }

  return result
}

export default unionBy
