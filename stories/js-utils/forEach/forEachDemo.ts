import { action } from 'storybook/actions'
import forEach, { each } from '../../../packages/js-utils/src/forEach'

const forEachDemo = () => {
  // 基础遍历
  const result: string[] = []
  forEach([1, 2, 3], (n) => { result.push('item-' + n) })
  action('forEach - 遍历数组')(result)

  // each 是 forEach 的别名
  action('forEach === each')(forEach === each)

  // 返回 false 中断遍历
  const items: number[] = []
  forEach([1, 2, 3, 4, 5], (n) => {
    if (n > 3) return false
    items.push(n)
  })
  action('forEach - 返回 false 中断')({
    收集到的: items,
    说明: '遍历到 4 时返回 false 中断',
  })
}

export default forEachDemo
