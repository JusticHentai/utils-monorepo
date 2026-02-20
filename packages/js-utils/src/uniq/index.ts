/**
 * 创建一个去重后的数组
 * @param array - 需要去重的数组
 * @returns 返回去重后的新数组
 * @example
 * uniq([2, 1, 2])
 * // => [2, 1]
 */
const uniq = <T>(array: T[]): T[] => {
  if (!array || array.length === 0) return []
  return [...new Set(array)]
}

export default uniq
