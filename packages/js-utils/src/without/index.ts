/**
 * 创建一个排除所有给定值的数组
 * @param array - 要处理的数组
 * @param values - 要排除的值
 * @returns 返回过滤后的新数组
 * @example
 * without([2, 1, 2, 3], 1, 2)
 * // => [3]
 */
const without = <T>(array: T[], ...values: T[]): T[] => {
  if (!array?.length) {
    return []
  }

  const valuesSet = new Set(values)
  return array.filter((item) => !valuesSet.has(item))
}

export default without
