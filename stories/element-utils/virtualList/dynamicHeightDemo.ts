import { action } from 'storybook/actions'
import createVirtualList from '../../../packages/element-utils/src/virtualList'

/**
 * 动态高度：演示 updateItemHeight 更新实际高度后的计算差异
 * 模拟部分项高度不同于预估值的场景
 */
const dynamicHeightDemo = () => {
  const items = Array.from({ length: 100 }, (_, i) => ({
    id: i,
    text: `Item ${i}`,
  }))

  const virtualList = createVirtualList({
    items,
    containerHeight: 300,
    estimatedItemHeight: 50,
  })

  action('更新前 - 总高度')(virtualList.getTotalHeight())

  const beforeResult = virtualList.calculateVisibleItems(0)
  action('更新前 - 可见项范围')({
    startIndex: beforeResult.startIndex,
    endIndex: beforeResult.endIndex,
  })

  // 模拟前 5 项实际高度为 100px（预估的 2 倍）
  for (let i = 0; i < 5; i++) {
    virtualList.updateItemHeight(i, 100)
  }

  action('更新后 - 总高度')(virtualList.getTotalHeight())

  const afterResult = virtualList.calculateVisibleItems(0)
  action('更新后 - 可见项范围')({
    startIndex: afterResult.startIndex,
    endIndex: afterResult.endIndex,
  })

  action('高度差异')(
    virtualList.getTotalHeight() - items.length * 50
  )
}

export default dynamicHeightDemo
