import sortedLastIndex from '../sortedLastIndex'

/**
 * 类似于 lastIndexOf，但使用二分查找（数组必须已排序）
 * @param array - 已排序的数组
 * @param value - 要搜索的值
 * @returns 返回值的最后一个索引，否则返回 -1
 * @example
 * sortedLastIndexOf([4, 5, 5, 5, 6], 5)
 * // => 3
 */
const sortedLastIndexOf = <T>(array: T[], value: T): number => {
  if (!array?.length) {
    return -1
  }

  const index = sortedLastIndex(array, value) - 1
  if (index >= 0 && array[index] === value) {
    return index
  }

  return -1
}

export default sortedLastIndexOf
