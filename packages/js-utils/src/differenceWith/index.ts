/**
 * 类似 difference，但使用比较器函数来决定比较标准
 * @param array - 要检查的数组
 * @param values - 排除的值
 * @param comparator - 比较器函数
 * @returns 返回过滤后的新数组
 * @example
 * const objects = [{ x: 1, y: 2 }, { x: 2, y: 1 }]
 * differenceWith(objects, [{ x: 1, y: 2 }], (a, b) => a.x === b.x && a.y === b.y)
 * // => [{ x: 2, y: 1 }]
 */
const differenceWith = <T>(
  array: T[],
  values: T[],
  comparator: (a: T, b: T) => boolean
): T[] => {
  if (!array?.length) return []
  if (!values?.length) return [...array]

  return array.filter((item) => !values.some((val) => comparator(item, val)))
}

export default differenceWith
