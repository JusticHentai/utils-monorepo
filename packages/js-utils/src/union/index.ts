/**
 * 创建一个包含所有唯一值的数组（并集）
 * @param arrays - 要合并的数组
 * @returns 返回新的并集数组
 * @example
 * union([2], [1, 2])
 * // => [2, 1]
 */
const union = <T>(...arrays: T[][]): T[] => {
  const result: T[] = []
  const seen = new Set<T>()

  for (const array of arrays) {
    if (!array?.length) continue
    for (const value of array) {
      if (!seen.has(value)) {
        seen.add(value)
        result.push(value)
      }
    }
  }

  return result
}

export default union
