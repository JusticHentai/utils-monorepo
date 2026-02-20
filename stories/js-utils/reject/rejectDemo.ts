import { action } from 'storybook/actions'
import reject from '../../../packages/js-utils/src/reject'

const rejectDemo = () => {
  const users = [
    { user: 'barney', age: 36, active: false },
    { user: 'fred', age: 40, active: true },
  ]
  action('reject 演示')({
    '排除 active 为 true 的': reject(users, (o) => o.active),
  })
}

export default rejectDemo
