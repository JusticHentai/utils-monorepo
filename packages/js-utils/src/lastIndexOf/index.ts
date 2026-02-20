/**
 * 获取 value 在数组中最后一次出现的索引
 * @param array - 要搜索的数组
 * @param value - 要搜索的值
 * @param fromIndex - 搜索的起始索引，默认为 array.length - 1
 * @returns 返回值的索引，未找到则返回 -1
 * @example
 * lastIndexOf([1, 2, 1, 2], 2)
 * // => 3
 */
const lastIndexOf = <T>(array: T[], value: T, fromIndex?: number): number => {
  if (!array?.length) return -1

  const start =
    fromIndex !== undefined
      ? Math.min(fromIndex, array.length - 1)
      : array.length - 1

  for (let i = start; i >= 0; i--) {
    if (array[i] === value) return i
  }

  return -1
}

export default lastIndexOf
