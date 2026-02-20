import { action } from 'storybook/actions'
import keyBy from '../../../packages/js-utils/src/keyBy'

const keyByFnDemo = () => {
  // 自定义函数作为迭代器
  const users = [
    { dir: 'left', code: 97 },
    { dir: 'right', code: 100 },
  ]

  const byCharCode = keyBy(users, (obj) => String.fromCharCode(obj.code))
  action('keyBy - 自定义函数分组')({
    输入: users,
    说明: '使用 String.fromCharCode(obj.code) 作为键',
    结果: byCharCode,
  })

  // 使用复合键
  const products = [
    { category: 'food', id: 1, name: 'apple' },
    { category: 'drink', id: 2, name: 'cola' },
    { category: 'food', id: 3, name: 'bread' },
  ]

  const byCompositeKey = keyBy(
    products,
    (item) => `${item.category}-${item.id}`
  )
  action('keyBy - 复合键')({
    输入: products,
    说明: '使用 category-id 作为复合键',
    结果: byCompositeKey,
  })
}

export default keyByFnDemo
