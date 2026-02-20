import { action } from 'storybook/actions'
import { matches } from '../../../packages/js-utils/src/isMatch'

const matchesDemo = () => {
  const users = [
    { name: 'Alice', age: 25, active: true },
    { name: 'Bob', age: 30, active: false },
    { name: 'Charlie', age: 25, active: true },
  ]

  const isActive25 = matches({ age: 25, active: true })
  const result = users.filter(isActive25)

  action('matches - 过滤匹配用户')({
    输入: users,
    模式: { age: 25, active: true },
    结果: result,
  })
}

export default matchesDemo
