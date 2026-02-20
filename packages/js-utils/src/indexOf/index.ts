/**
 * 获取 value 在数组中首次出现的索引
 * @param array - 要搜索的数组
 * @param value - 要搜索的值
 * @param fromIndex - 搜索的起始索引，默认为 0
 * @returns 返回值的索引，未找到则返回 -1
 * @example
 * indexOf([1, 2, 1, 2], 2)
 * // => 1
 */
const indexOf = <T>(array: T[], value: T, fromIndex: number = 0): number => {
  if (!array?.length) return -1

  const start =
    fromIndex < 0 ? Math.max(0, array.length + fromIndex) : fromIndex

  for (let i = start; i < array.length; i++) {
    if (array[i] === value) return i
  }

  return -1
}

export default indexOf
