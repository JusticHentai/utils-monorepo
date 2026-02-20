import { action } from 'storybook/actions'
import findLastKey from '../../../packages/js-utils/src/findLastKey'

const findLastKeyDemo = () => {
  const users = { barney: { age: 36, active: true }, fred: { age: 40, active: false }, pebbles: { age: 1, active: true } }
  action('findLastKey 演示')({
    '最后一个 active 为 true 的 key': findLastKey(users, (o) => o.active),
  })
}

export default findLastKeyDemo
