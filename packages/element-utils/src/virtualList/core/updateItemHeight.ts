import { ItemMeasurement } from '../interface'
import getItemOffset from './getItemOffset'

/**
 * 更新某项的实际高度
 */
const updateItemHeight = <T>(
  items: T[],
  measurements: Map<number, ItemMeasurement>,
  estimatedItemHeight: number,
  index: number,
  height: number
): void => {
  if (index < 0 || index >= items.length) {
    throw new Error(`Invalid index: ${index}`)
  }

  if (height <= 0) {
    throw new Error('height must be a positive number')
  }

  const offset = getItemOffset(measurements, estimatedItemHeight, index)
  measurements.set(index, { index, height, offset })
}

export default updateItemHeight
