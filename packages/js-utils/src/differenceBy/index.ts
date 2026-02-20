/**
 * 类似 difference，但使用迭代器函数来决定比较标准
 * @param array - 要检查的数组
 * @param values - 排除的值
 * @param iteratee - 迭代器函数
 * @returns 返回过滤后的新数组
 * @example
 * differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor)
 * // => [1.2]
 */
const differenceBy = <T>(
  array: T[],
  values: T[],
  iteratee: (value: T) => unknown
): T[] => {
  if (!array?.length) return []
  if (!values?.length) return [...array]

  const transformedValues = new Set(values.map(iteratee))
  return array.filter((item) => !transformedValues.has(iteratee(item)))
}

export default differenceBy
