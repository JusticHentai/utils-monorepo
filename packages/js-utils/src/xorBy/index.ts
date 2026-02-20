/**
 * 类似于 xor，但可以指定迭代器
 * @param arrays - 要处理的数组
 * @param iteratee - 迭代器函数
 * @returns 返回新的对称差集数组
 * @example
 * xorBy([2.1, 1.2], [2.3, 3.4], Math.floor)
 * // => [1.2, 3.4]
 */
const xorBy = <T, K>(arrays: T[][], iteratee: (value: T) => K): T[] => {
  if (!arrays.length) {
    return []
  }

  const countMap = new Map<K, { value: T; count: number }>()

  for (const array of arrays) {
    if (!array?.length) continue
    const seen = new Set<K>()
    for (const value of array) {
      const computed = iteratee(value)
      if (!seen.has(computed)) {
        seen.add(computed)
        const existing = countMap.get(computed)
        if (existing) {
          existing.count++
        } else {
          countMap.set(computed, { value, count: 1 })
        }
      }
    }
  }

  const result: T[] = []
  for (const { value, count } of countMap.values()) {
    if (count === 1) {
      result.push(value)
    }
  }

  return result
}

export default xorBy
