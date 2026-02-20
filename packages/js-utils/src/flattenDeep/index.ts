/**
 * 将数组完全递归扁平化
 * @param array - 要扁平化的数组
 * @returns 返回新的完全扁平化数组
 * @example
 * flattenDeep([1, [2, [3, [4]], 5]])
 * // => [1, 2, 3, 4, 5]
 */
const flattenDeep = <T>(array: unknown[]): T[] => {
  if (!array?.length) return []

  const result: unknown[] = []

  const flatten = (arr: unknown[]) => {
    for (const item of arr) {
      if (Array.isArray(item)) {
        flatten(item)
      } else {
        result.push(item)
      }
    }
  }

  flatten(array)

  return result as T[]
}

export default flattenDeep
