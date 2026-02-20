/**
 * 将数组扁平化指定深度
 * @param array - 要扁平化的数组
 * @param depth - 扁平化深度，默认为 1
 * @returns 返回新的扁平化数组
 * @example
 * flattenDepth([1, [2, [3, [4]], 5]], 2)
 * // => [1, 2, 3, [4], 5]
 */
const flattenDepth = <T>(array: unknown[], depth: number = 1): T[] => {
  if (!array?.length) return []

  const flatten = (arr: unknown[], d: number): unknown[] => {
    const result: unknown[] = []
    for (const item of arr) {
      if (Array.isArray(item) && d > 0) {
        result.push(...flatten(item, d - 1))
      } else {
        result.push(item)
      }
    }
    return result
  }

  return flatten(array, depth) as T[]
}

export default flattenDepth
