/**
 * 创建一个差集数组，不包含在其他给定数组中的值
 * @param array - 要检查的数组
 * @param values - 排除的值数组
 * @returns 返回过滤后的新数组
 * @example
 * difference([2, 1], [2, 3])
 * // => [1]
 */
const difference = <T>(array: T[], ...values: T[][]): T[] => {
  if (!array?.length) return []

  const excludeSet = new Set(values.flat())
  return array.filter((item) => !excludeSet.has(item))
}

export default difference
