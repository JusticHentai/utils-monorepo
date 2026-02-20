import { action } from 'storybook/actions'
import dropRightWhile from '../../../packages/js-utils/src/dropRightWhile'

const dropRightWhileDemo = () => {
  const users = [
    { user: 'barney', active: true },
    { user: 'fred', active: false },
    { user: 'pebbles', active: false },
  ]

  action('dropRightWhile')({
    输入: users,
    结果: dropRightWhile(users, (o) => !o.active),
    说明: '从末尾移除元素直到断言返回 false',
  })
}

export default dropRightWhileDemo
