import { action } from 'storybook/actions'
import createVirtualList from '../../../packages/element-utils/src/virtualList'

/**
 * 重置测量数据：演示 reset 方法清除所有已缓存的高度信息
 * 常用于列表数据源变化后需要重新计算的场景
 */
const resetDemo = () => {
  const items = Array.from({ length: 100 }, (_, i) => ({
    id: i,
    text: `Item ${i}`,
  }))

  const virtualList = createVirtualList({
    items,
    containerHeight: 300,
    estimatedItemHeight: 50,
  })

  // 更新部分项高度
  for (let i = 0; i < 10; i++) {
    virtualList.updateItemHeight(i, 80)
  }

  action('更新后总高度')(virtualList.getTotalHeight())

  // 重置所有测量数据
  virtualList.reset()

  action('重置后总高度（恢复为预估值）')(virtualList.getTotalHeight())
  action('前后差值')(
    items.length * 50 - virtualList.getTotalHeight()
  )
}

export default resetDemo
