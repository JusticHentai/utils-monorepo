/**
 * 将数组拆分成指定大小的分块
 * @param array - 需要处理的数组
 * @param size - 每个分块的长度，默认为 1
 * @returns 返回拆分后的新数组
 * @example
 * chunk(['a', 'b', 'c', 'd'], 2)
 * // => [['a', 'b'], ['c', 'd']]
 *
 * chunk(['a', 'b', 'c', 'd'], 3)
 * // => [['a', 'b', 'c'], ['d']]
 */
const chunk = <T>(array: T[], size = 1): T[][] => {
  if (!array || array.length === 0) return []

  const chunkSize = Math.max(Math.floor(size), 1)
  const result: T[][] = []

  for (let i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize))
  }

  return result
}

export default chunk
