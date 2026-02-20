import { action } from 'storybook/actions'
import at from '../../../packages/js-utils/src/at'

const nestedDemo = () => {
  const object = { a: [{ b: { c: 3 } }, 4] }

  action('at - 深层嵌套路径')({
    输入对象: '{ a: [{ b: { c: 3 } }, 4] }',
    路径: ['a[0].b.c', 'a[1]'],
    结果: at(object, ['a[0].b.c', 'a[1]']),
    说明: 'a[0].b.c => 3, a[1] => 4',
  })

  // 复杂嵌套
  const data = {
    users: [
      { name: 'Alice', address: { city: 'Beijing' } },
      { name: 'Bob', address: { city: 'Shanghai' } },
    ],
  }

  action('at - 复杂对象取值')({
    路径: ['users[0].name', 'users[1].address.city'],
    结果: at(data, ['users[0].name', 'users[1].address.city']),
  })
}

export default nestedDemo
