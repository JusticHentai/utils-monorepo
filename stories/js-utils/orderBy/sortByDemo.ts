import { action } from 'storybook/actions'
import sortBy from '../../../packages/js-utils/src/sortBy'

const sortByDemo = () => {
  const users = [
    { name: 'fred', age: 48 },
    { name: 'barney', age: 36 },
    { name: 'fred', age: 40 },
  ]

  action('sortBy - 简化排序（升序）')({
    输入: users,
    结果: sortBy(users, ['age']),
    说明: 'sortBy 默认升序排序',
  })

  action('sortBy - 函数排序')({
    输入: users,
    结果: sortBy(users, [(o) => o.name.length]),
    说明: '按 name 长度排序',
  })
}

export default sortByDemo
