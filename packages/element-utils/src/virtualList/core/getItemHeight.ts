import { ItemMeasurement } from '../interface'

/**
 * 获取某项的高度（已测量则返回实际高度，否则返回预估高度）
 */
const getItemHeight = (
  measurements: Map<number, ItemMeasurement>,
  estimatedItemHeight: number,
  index: number
): number => {
  const measurement = measurements.get(index)
  return measurement?.height ?? estimatedItemHeight
}

export default getItemHeight
