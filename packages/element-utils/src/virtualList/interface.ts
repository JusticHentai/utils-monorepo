/**
 * 虚拟列表配置项
 */
export interface VirtualListOptions<T = unknown> {
  /** 列表数据 */
  items: T[]
  /** 容器高度 */
  containerHeight: number
  /** 预估的每项高度（用于初始计算） */
  estimatedItemHeight: number
  /** 额外渲染的缓冲区项数 */
  overScan?: number
}

/**
 * 动态高度项信息
 */
export interface ItemMeasurement {
  /** 项的索引 */
  index: number
  /** 项的高度 */
  height: number
  /** 项的顶部偏移量 */
  offset: number
}

/**
 * 虚拟列表计算结果
 */
export interface VirtualListResult<T = unknown> {
  /** 可见项列表 */
  visibleItems: VirtualItem<T>[]
  /** 总高度 */
  totalHeight: number
  /** 起始索引 */
  startIndex: number
  /** 结束索引 */
  endIndex: number
}

/**
 * 虚拟列表项
 */
export interface VirtualItem<T = unknown> {
  /** 原始数据 */
  data: T
  /** 索引 */
  index: number
  /** 顶部偏移量 */
  offset: number
  /** 高度 */
  height: number
}

/**
 * 虚拟列表实例
 */
export interface VirtualListInstance<T = unknown> {
  /** 根据滚动位置计算可见项 */
  calculateVisibleItems: (scrollTop: number) => VirtualListResult<T>
  /** 更新某项的实际高度 */
  updateItemHeight: (index: number, height: number) => void
  /** 获取总高度 */
  getTotalHeight: () => number
  /** 滚动到指定索引 */
  getScrollTopForIndex: (index: number) => number
  /** 重置所有测量数据 */
  reset: () => void
}
