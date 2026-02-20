/**
 * 根据迭代器返回值去重
 * @param array - 需要去重的数组
 * @param iteratee - 迭代器函数
 * @returns 返回去重后的新数组
 * @example
 * uniqBy([2.1, 1.2, 2.3], Math.floor)
 * // => [2.1, 1.2]
 */
const uniqBy = <T>(array: T[], iteratee: (value: T) => unknown): T[] => {
  if (!array || array.length === 0) return []

  const seen = new Set<unknown>()
  const result: T[] = []

  for (const item of array) {
    const computed = iteratee(item)
    if (!seen.has(computed)) {
      seen.add(computed)
      result.push(item)
    }
  }

  return result
}

export default uniqBy
