import { action } from 'storybook/actions'
import { sortedIndexBy } from '../../../packages/js-utils/src/sortedIndex'

const sortedIndexByDemo = () => {
  const users = [
    { name: 'Alice', age: 20 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 40 },
  ]

  const idx = sortedIndexBy(users, { name: 'Dave', age: 35 }, (u) => u.age)
  action('sortedIndexBy - 按age插入')({ 数组: users.map(u => u.name), 位置: idx })
}

export default sortedIndexByDemo
