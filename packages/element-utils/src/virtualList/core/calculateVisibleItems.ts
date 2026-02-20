import { ItemMeasurement, VirtualListResult } from '../interface'
import findStartIndex from './findStartIndex'
import getItemHeight from './getItemHeight'
import getItemOffset from './getItemOffset'
import getTotalHeight from './getTotalHeight'

/**
 * 根据滚动位置计算可见项
 */
const calculateVisibleItems = <T>(
  items: T[],
  measurements: Map<number, ItemMeasurement>,
  containerHeight: number,
  estimatedItemHeight: number,
  overScan: number,
  scrollTop: number
): VirtualListResult<T> => {
  if (items.length === 0) {
    return {
      visibleItems: [],
      totalHeight: 0,
      startIndex: 0,
      endIndex: 0,
    }
  }

  const safeScrollTop = Math.max(0, scrollTop)

  // 找到起始索引
  let startIndex = findStartIndex(
    items,
    measurements,
    estimatedItemHeight,
    safeScrollTop
  )
  startIndex = Math.max(0, startIndex - overScan)

  // 找到结束索引
  let endIndex = startIndex
  let accumulatedHeight = getItemOffset(
    measurements,
    estimatedItemHeight,
    startIndex
  )

  while (
    endIndex < items.length &&
    accumulatedHeight < safeScrollTop + containerHeight
  ) {
    accumulatedHeight += getItemHeight(
      measurements,
      estimatedItemHeight,
      endIndex
    )
    endIndex++
  }

  // 添加缓冲区
  endIndex = Math.min(items.length - 1, endIndex + overScan)

  // 构建可见项列表
  const visibleItems = []
  for (let i = startIndex; i <= endIndex; i++) {
    visibleItems.push({
      data: items[i],
      index: i,
      offset: getItemOffset(measurements, estimatedItemHeight, i),
      height: getItemHeight(measurements, estimatedItemHeight, i),
    })
  }

  return {
    visibleItems,
    totalHeight: getTotalHeight(items, measurements, estimatedItemHeight),
    startIndex,
    endIndex,
  }
}

export default calculateVisibleItems
