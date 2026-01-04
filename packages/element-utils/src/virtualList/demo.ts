import createVirtualList from '.'

// 创建虚拟列表实例
const virtualList = createVirtualList({
  items: Array.from({ length: 10000 }, (_, i) => ({ id: i, text: `Item ${i}` })),
  containerHeight: 500,
  estimatedItemHeight: 50,
  overscan: 5,
})

// 计算可见项
const result = virtualList.calculateVisibleItems(0)
console.log(result)

// 更新某项的实际高度
virtualList.updateItemHeight(0, 80)

// 获取滚动到指定索引的 scrollTop
const scrollTop = virtualList.getScrollTopForIndex(100)
console.log(scrollTop)
