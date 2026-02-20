/**
 * 创建一个数组切片
 * @param array - 要切片的数组
 * @param start - 开始索引，默认为 0
 * @param end - 结束索引，默认为 array.length
 * @returns 返回切片后的数组
 * @example
 * slice([1, 2, 3, 4], 1, 3)
 * // => [2, 3]
 */
const slice = <T>(array: T[], start: number = 0, end?: number): T[] => {
  if (!array?.length) {
    return []
  }

  return array.slice(start, end)
}

export default slice
