/**
 * 创建一个移除了所有假值的新数组
 * 假值包括：false, null, 0, "", undefined, NaN
 * @param array - 需要处理的数组
 * @returns 返回过滤后的新数组
 * @example
 * compact([0, 1, false, 2, '', 3])
 * // => [1, 2, 3]
 */
const compact = <T>(array: T[]): NonNullable<T>[] => {
  if (!array || array.length === 0) return []

  return array.filter(Boolean) as NonNullable<T>[]
}

export default compact
