import { action } from 'storybook/actions'
import keyBy from '../../../packages/js-utils/src/keyBy'

const keyByDemo = () => {
  // 基础：按属性分组
  const users = [
    { dir: 'left', code: 97 },
    { dir: 'right', code: 100 },
  ]

  action('keyBy - 按属性分组')({
    输入: users,
    'keyBy(users, "dir")': keyBy(users, 'dir'),
    说明: '按 dir 属性创建索引',
  })

  // 自定义函数 iteratee
  const byCharCode = keyBy(users, (obj) => String.fromCharCode(obj.code))
  action('keyBy - 自定义函数')({
    说明: '使用 String.fromCharCode 作为键',
    结果: byCharCode,
  })

  // 重复键 — 后面的值覆盖前面的
  const items = [
    { type: 'fruit', name: 'apple' },
    { type: 'fruit', name: 'banana' },
  ]
  action('keyBy - 重复键(后者覆盖)')({
    输入: items,
    结果: keyBy(items, 'type'),
    说明: '两个 fruit，最后的 banana 覆盖 apple',
  })
}

export default keyByDemo