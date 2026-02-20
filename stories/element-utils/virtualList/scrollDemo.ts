import { action } from 'storybook/actions'
import createVirtualList from '../../../packages/element-utils/src/virtualList'

/**
 * 滚动计算：模拟不同滚动位置下的可见项变化
 * 演示 calculateVisibleItems 在不同 scrollTop 下返回不同区间
 */
const scrollDemo = () => {
  const items = Array.from({ length: 500 }, (_, i) => ({
    id: i,
    text: `Item ${i}`,
  }))

  const virtualList = createVirtualList({
    items,
    containerHeight: 300,
    estimatedItemHeight: 40,
  })

  const scrollPositions = [0, 200, 1000, 5000, 15000]

  scrollPositions.forEach((scrollTop) => {
    const result = virtualList.calculateVisibleItems(scrollTop)
    action(`scrollTop=${scrollTop}`)({
      startIndex: result.startIndex,
      endIndex: result.endIndex,
      visibleCount: result.visibleItems.length,
      firstItem: result.visibleItems[0]?.data,
      lastItem: result.visibleItems[result.visibleItems.length - 1]?.data,
    })
  })
}

export default scrollDemo
