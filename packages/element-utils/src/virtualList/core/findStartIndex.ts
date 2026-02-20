import { ItemMeasurement } from '../interface'
import getItemHeight from './getItemHeight'
import getItemOffset from './getItemOffset'

/**
 * 二分查找起始索引
 */
const findStartIndex = <T>(
  items: T[],
  measurements: Map<number, ItemMeasurement>,
  estimatedItemHeight: number,
  scrollTop: number
): number => {
  let low = 0
  let high = items.length - 1

  while (low <= high) {
    const mid = Math.floor((low + high) / 2)
    const offset = getItemOffset(measurements, estimatedItemHeight, mid)
    const height = getItemHeight(measurements, estimatedItemHeight, mid)

    if (offset + height < scrollTop) {
      low = mid + 1
    } else if (offset > scrollTop) {
      high = mid - 1
    } else {
      return mid
    }
  }

  return Math.max(0, low)
}

export default findStartIndex
