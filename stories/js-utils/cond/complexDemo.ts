import { action } from 'storybook/actions'
import cond from '../../../packages/js-utils/src/cond'

const complexDemo = () => {
  // 对象属性匹配
  interface Item { type: string; value: number }

  const process = cond<Item, string>([
    [(item) => item.type === 'error' && item.value > 100, () => '严重错误'],
    [(item) => item.type === 'error', () => '普通错误'],
    [(item) => item.type === 'warning', () => '警告'],
    [() => true, () => '正常'],
  ])

  action('cond - 复杂条件匹配')({
    严重错误: process({ type: 'error', value: 200 }),
    普通错误: process({ type: 'error', value: 50 }),
    警告: process({ type: 'warning', value: 0 }),
    正常: process({ type: 'info', value: 0 }),
    说明: '按顺序匹配条件，返回第一个为真的结果',
  })
}

export default complexDemo
