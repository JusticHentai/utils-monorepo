import { action } from 'storybook/actions'
import { dropWhile } from '../../../packages/js-utils/src/drop'

const dropWhileDemo = () => {
  const users = [
    { user: 'barney', active: false },
    { user: 'fred', active: false },
    { user: 'pebbles', active: true },
  ]

  action('dropWhile - 函数断言')({
    输入: users,
    结果: dropWhile(users, (o) => !o.active),
    说明: '从开头移除元素直到断言返回 false',
  })

  action('dropWhile - 对象匹配')({
    输入: users,
    结果: dropWhile(users, { active: false }),
    说明: '移除匹配对象属性的元素',
  })
}

export default dropWhileDemo
