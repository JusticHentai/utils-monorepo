import { action } from 'storybook/actions'
import iteratee from '../../../packages/js-utils/src/iteratee'

const iterateeDemo = () => {
  const users = [{ user: 'barney', age: 36 }, { user: 'fred', age: 40 }]
  action('iteratee 演示')({
    '字符串路径': users.map(iteratee('user')),
    '对象匹配': users.filter(iteratee({ user: 'barney' })),
    '数组匹配': users.filter(iteratee(['user', 'fred'])),
  })
}

export default iterateeDemo
