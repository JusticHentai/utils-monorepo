import { action } from 'storybook/actions'
import createVirtualList from '../../../packages/element-utils/src/virtualList'

/**
 * 滚动到指定索引：演示 getScrollTopForIndex 计算目标 scrollTop
 * 常用于"跳转到第 N 项"的场景
 */
const scrollToIndexDemo = () => {
  const items = Array.from({ length: 1000 }, (_, i) => ({
    id: i,
    text: `Item ${i}`,
  }))

  const virtualList = createVirtualList({
    items,
    containerHeight: 300,
    estimatedItemHeight: 50,
  })

  const targetIndices = [0, 10, 50, 100, 500, 999]

  targetIndices.forEach((index) => {
    const scrollTop = virtualList.getScrollTopForIndex(index)
    const visibleItems = virtualList.calculateVisibleItems(scrollTop)
    action(`跳转到 Item ${index}`)({
      scrollTop,
      startIndex: visibleItems.startIndex,
      endIndex: visibleItems.endIndex,
    })
  })
}

export default scrollToIndexDemo
