import { action } from 'storybook/actions'
import reject from '../../../packages/js-utils/src/reject'

const rejectDemo = () => {
  const users = [
    { name: 'Alice', age: 25, active: true },
    { name: 'Bob', age: 30, active: false },
    { name: 'Charlie', age: 35, active: true },
  ]

  action('reject - 排除活跃用户')(reject(users, (u) => u.active))
}

export default rejectDemo
