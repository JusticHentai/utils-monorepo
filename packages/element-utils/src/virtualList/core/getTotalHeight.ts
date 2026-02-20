import { ItemMeasurement } from '../interface'
import getItemHeight from './getItemHeight'

/**
 * 计算总高度
 */
const getTotalHeight = <T>(
  items: T[],
  measurements: Map<number, ItemMeasurement>,
  estimatedItemHeight: number
): number => {
  let totalHeight = 0
  for (let i = 0; i < items.length; i++) {
    totalHeight += getItemHeight(measurements, estimatedItemHeight, i)
  }
  return totalHeight
}

export default getTotalHeight
