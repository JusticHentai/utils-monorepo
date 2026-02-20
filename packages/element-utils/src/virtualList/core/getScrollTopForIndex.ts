import { ItemMeasurement } from '../interface'
import getItemOffset from './getItemOffset'

/**
 * 获取滚动到指定索引所需的 scrollTop
 */
const getScrollTopForIndex = <T>(
  items: T[],
  measurements: Map<number, ItemMeasurement>,
  estimatedItemHeight: number,
  index: number
): number => {
  if (index < 0 || index >= items.length) {
    throw new Error(`Invalid index: ${index}`)
  }

  return getItemOffset(measurements, estimatedItemHeight, index)
}

export default getScrollTopForIndex
