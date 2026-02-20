import { action } from 'storybook/actions'
import findLastIndex from '../../../packages/js-utils/src/findLastIndex'

const findLastIndexDemo = () => {
  const users = [
    { user: 'barney', active: true },
    { user: 'fred', active: false },
    { user: 'pebbles', active: false },
  ]
  action('findLastIndex 演示')({
    '最后一个 active 为 false 的索引': findLastIndex(users, (o) => !o.active),
  })
}

export default findLastIndexDemo
