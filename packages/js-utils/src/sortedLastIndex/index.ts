/**
 * 类似于 sortedIndex，但返回最高索引位置
 * @param array - 已排序的数组
 * @param value - 要评估的值
 * @returns 返回 value 应该插入的最高索引
 * @example
 * sortedLastIndex([4, 5, 5, 5, 6], 5)
 * // => 4
 */
const sortedLastIndex = <T>(array: T[], value: T): number => {
  if (!array?.length) {
    return 0
  }

  let low = 0
  let high = array.length

  while (low < high) {
    const mid = Math.floor((low + high) / 2)
    if (array[mid] <= value) {
      low = mid + 1
    } else {
      high = mid
    }
  }

  return low
}

export default sortedLastIndex
