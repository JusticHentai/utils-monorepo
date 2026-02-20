/**
 * 使用二分查找确定 value 应该插入到已排序数组中的最低索引位置
 * @param array - 已排序的数组
 * @param value - 要评估的值
 * @returns 返回 value 应该插入的索引
 * @example
 * sortedIndex([30, 50], 40)
 * // => 1
 */
const sortedIndex = <T>(array: T[], value: T): number => {
  if (!array?.length) {
    return 0
  }

  let low = 0
  let high = array.length

  while (low < high) {
    const mid = Math.floor((low + high) / 2)
    if (array[mid] < value) {
      low = mid + 1
    } else {
      high = mid
    }
  }

  return low
}

export default sortedIndex
