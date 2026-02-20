import { action } from 'storybook/actions'
import uniqBy from '../../../packages/js-utils/src/uniqBy'

const uniqByDemo = () => {
  // Math.floor 去重
  action('uniqBy - Math.floor 去重')({
    输入: [2.1, 1.2, 2.3],
    结果: uniqBy([2.1, 1.2, 2.3], Math.floor),
  })

  // 按属性去重
  const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 1, name: 'Alice2' },
  ]
  action('uniqBy - 按属性函数去重')({
    输入: users,
    结果: uniqBy(users, (u) => u.id),
  })
}

export default uniqByDemo
