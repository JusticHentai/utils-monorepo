import {
  ItemMeasurement,
  VirtualListInstance,
  VirtualListOptions,
  VirtualListResult,
} from './interface'

/**
 * 创建虚拟列表实例
 * 支持动态高度的虚拟列表滚动位置计算
 */
const createVirtualList = <T = unknown>(
  options: VirtualListOptions<T>
): VirtualListInstance<T> => {
  const { items, containerHeight, estimatedItemHeight, overscan = 3 } = options

  if (!Array.isArray(items)) {
    throw new Error('items must be an array')
  }

  if (containerHeight <= 0) {
    throw new Error('containerHeight must be a positive number')
  }

  if (estimatedItemHeight <= 0) {
    throw new Error('estimatedItemHeight must be a positive number')
  }

  // 存储每项的测量信息
  const measurements: Map<number, ItemMeasurement> = new Map()

  /**
   * 获取某项的高度（已测量则返回实际高度，否则返回预估高度）
   */
  const getItemHeight = (index: number): number => {
    const measurement = measurements.get(index)
    return measurement?.height ?? estimatedItemHeight
  }

  /**
   * 计算某项的偏移量
   */
  const getItemOffset = (index: number): number => {
    let offset = 0
    for (let i = 0; i < index; i++) {
      offset += getItemHeight(i)
    }
    return offset
  }

  /**
   * 计算总高度
   */
  const getTotalHeight = (): number => {
    let totalHeight = 0
    for (let i = 0; i < items.length; i++) {
      totalHeight += getItemHeight(i)
    }
    return totalHeight
  }

  /**
   * 二分查找起始索引
   */
  const findStartIndex = (scrollTop: number): number => {
    let low = 0
    let high = items.length - 1

    while (low <= high) {
      const mid = Math.floor((low + high) / 2)
      const offset = getItemOffset(mid)
      const height = getItemHeight(mid)

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

  /**
   * 根据滚动位置计算可见项
   */
  const calculateVisibleItems = (scrollTop: number): VirtualListResult<T> => {
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
    let startIndex = findStartIndex(safeScrollTop)
    startIndex = Math.max(0, startIndex - overscan)

    // 找到结束索引
    let endIndex = startIndex
    let accumulatedHeight = getItemOffset(startIndex)

    while (
      endIndex < items.length &&
      accumulatedHeight < safeScrollTop + containerHeight
    ) {
      accumulatedHeight += getItemHeight(endIndex)
      endIndex++
    }

    // 添加缓冲区
    endIndex = Math.min(items.length - 1, endIndex + overscan)

    // 构建可见项列表
    const visibleItems = []
    for (let i = startIndex; i <= endIndex; i++) {
      visibleItems.push({
        data: items[i],
        index: i,
        offset: getItemOffset(i),
        height: getItemHeight(i),
      })
    }

    return {
      visibleItems,
      totalHeight: getTotalHeight(),
      startIndex,
      endIndex,
    }
  }

  /**
   * 更新某项的实际高度
   */
  const updateItemHeight = (index: number, height: number): void => {
    if (index < 0 || index >= items.length) {
      throw new Error(`Invalid index: ${index}`)
    }

    if (height <= 0) {
      throw new Error('height must be a positive number')
    }

    const offset = getItemOffset(index)
    measurements.set(index, { index, height, offset })
  }

  /**
   * 获取滚动到指定索引所需的 scrollTop
   */
  const getScrollTopForIndex = (index: number): number => {
    if (index < 0 || index >= items.length) {
      throw new Error(`Invalid index: ${index}`)
    }

    return getItemOffset(index)
  }

  /**
   * 重置所有测量数据
   */
  const reset = (): void => {
    measurements.clear()
  }

  return {
    calculateVisibleItems,
    updateItemHeight,
    getTotalHeight,
    getScrollTopForIndex,
    reset,
  }
}

export default createVirtualList
