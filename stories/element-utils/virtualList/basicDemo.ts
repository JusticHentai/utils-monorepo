import { action } from 'storybook/actions'
import createVirtualList from '../../../packages/element-utils/src/virtualList'

/**
 * 基础用法：创建虚拟列表并计算可见项
 * 模拟 1000 条数据、300px 容器高度、每项 50px 预估高度
 */
const basicDemo = () => {
  const items = Array.from({ length: 1000 }, (_, i) => ({
    id: i,
    text: `Item ${i}`,
  }))

  const virtualList = createVirtualList({
    items,
    containerHeight: 300,
    estimatedItemHeight: 50,
  })

  const result = virtualList.calculateVisibleItems(0)

  action('总高度')(virtualList.getTotalHeight())
  action('scrollTop=0 时的可见项')(result)
  action('可见项数量')(result.visibleItems.length)
  action('startIndex')(result.startIndex)
  action('endIndex')(result.endIndex)
}

export default basicDemo
