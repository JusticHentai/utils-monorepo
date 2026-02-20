import { action } from 'storybook/actions'
import maxBy from '../../../packages/js-utils/src/maxBy'
import minBy from '../../../packages/js-utils/src/minBy'

const maxByDemo = () => {
  const users = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 20 },
  ]

  action('maxBy - 年龄最大')({
    结果: maxBy(users, (u) => u.age),
  })

  action('minBy - 年龄最小')({
    结果: minBy(users, (u) => u.age),
  })
}

export default maxByDemo
