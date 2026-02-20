import sortedIndex from '../sortedIndex'

/**
 * 类似于 indexOf，但使用二分查找（数组必须已排序）
 * @param array - 已排序的数组
 * @param value - 要搜索的值
 * @returns 返回值的索引，否则返回 -1
 * @example
 * sortedIndexOf([4, 5, 5, 5, 6], 5)
 * // => 1
 */
const sortedIndexOf = <T>(array: T[], value: T): number => {
  if (!array?.length) {
    return -1
  }

  const index = sortedIndex(array, value)
  if (index < array.length && array[index] === value) {
    return index
  }

  return -1
}

export default sortedIndexOf
