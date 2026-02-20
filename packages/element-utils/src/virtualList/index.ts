import calculateVisibleItems from './core/calculateVisibleItems'
import getScrollTopForIndex from './core/getScrollTopForIndex'
import getTotalHeight from './core/getTotalHeight'
import updateItemHeight from './core/updateItemHeight'
import {
  ItemMeasurement,
  VirtualListInstance,
  VirtualListOptions,
} from './interface'

/**
 * 创建虚拟列表实例
 * 支持动态高度的虚拟列表滚动位置计算
 */
const createVirtualList = <T = unknown>(
  options: VirtualListOptions<T>
): VirtualListInstance<T> => {
  const { items, containerHeight, estimatedItemHeight, overScan = 3 } = options

  if (!Array.isArray(items)) {
    return {} as VirtualListInstance<T>
  }

  if (containerHeight <= 0) {
    return {} as VirtualListInstance<T>
  }

  if (estimatedItemHeight <= 0) {
    return {} as VirtualListInstance<T>
  }

  const measurements: Map<number, ItemMeasurement> = new Map()

  return {
    calculateVisibleItems: (scrollTop: number) =>
      calculateVisibleItems(
        items,
        measurements,
        containerHeight,
        estimatedItemHeight,
        overScan,
        scrollTop
      ),
    updateItemHeight: (index: number, height: number) =>
      updateItemHeight(items, measurements, estimatedItemHeight, index, height),
    getTotalHeight: () =>
      getTotalHeight(items, measurements, estimatedItemHeight),
    getScrollTopForIndex: (index: number) =>
      getScrollTopForIndex(items, measurements, estimatedItemHeight, index),
    reset: () => {
      measurements.clear()
    },
  }
}

export default createVirtualList
