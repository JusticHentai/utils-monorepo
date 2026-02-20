/**
 * 将数组减少一个嵌套层级
 * @param array - 要扁平化的数组
 * @returns 返回新的扁平化数组
 * @example
 * flatten([1, [2, [3, [4]], 5]])
 * // => [1, 2, [3, [4]], 5]
 */
const flatten = <T>(array: unknown[]): T[] => {
  if (!array?.length) return []

  const result: unknown[] = []
  for (const item of array) {
    if (Array.isArray(item)) {
      result.push(...item)
    } else {
      result.push(item)
    }
  }
  return result as T[]
}

export default flatten
