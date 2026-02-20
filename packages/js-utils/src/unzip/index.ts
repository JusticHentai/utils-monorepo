/**
 * 接收一个分组元素的数组，并创建一个数组，将元素按原始索引重新分组
 * @param array - 要处理的分组元素数组
 * @returns 返回重新分组的数组
 * @example
 * unzip([['a', 1, true], ['b', 2, false]])
 * // => [['a', 'b'], [1, 2], [true, false]]
 */
const unzip = <T>(array: T[][]): T[][] => {
  if (!array?.length) {
    return []
  }

  const length = Math.max(...array.map((arr) => arr?.length || 0))
  const result: T[][] = Array.from({ length }, () => [])

  for (const subArray of array) {
    for (let i = 0; i < length; i++) {
      result[i].push(subArray?.[i] as T)
    }
  }

  return result
}

export default unzip
