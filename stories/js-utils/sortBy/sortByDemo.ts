import { action } from 'storybook/actions'
import sortBy from '../../../packages/js-utils/src/sortBy'

const sortByDemo = () => {
  const users = [
    { user: 'fred', age: 48 },
    { user: 'barney', age: 36 },
    { user: 'fred', age: 40 },
  ]
  action('sortBy 演示')({
    '按 user 排序': sortBy(users, [(o) => o.user]),
    '按 user 和 age 排序': sortBy(users, ['user', 'age']),
  })
}

export default sortByDemo
