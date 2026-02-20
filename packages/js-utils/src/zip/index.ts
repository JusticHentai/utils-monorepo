/**
 * 创建一个分组元素的数组
 * @param arrays - 要处理的数组
 * @returns 返回分组元素的数组
 * @example
 * zip(['a', 'b'], [1, 2], [true, false])
 * // => [['a', 1, true], ['b', 2, false]]
 */
const zip = <T>(...arrays: T[][]): T[][] => {
  if (!arrays.length) {
    return []
  }

  const length = Math.max(...arrays.map((arr) => arr?.length || 0))
  const result: T[][] = []

  for (let i = 0; i < length; i++) {
    const group: T[] = []
    for (const array of arrays) {
      group.push(array?.[i] as T)
    }
    result.push(group)
  }

  return result
}

export default zip
