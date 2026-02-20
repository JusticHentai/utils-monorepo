import { ItemMeasurement } from '../interface'
import getItemHeight from './getItemHeight'

/**
 * 计算某项的偏移量
 */
const getItemOffset = (
  measurements: Map<number, ItemMeasurement>,
  estimatedItemHeight: number,
  index: number
): number => {
  let offset = 0
  for (let i = 0; i < index; i++) {
    offset += getItemHeight(measurements, estimatedItemHeight, i)
  }
  return offset
}

export default getItemOffset
