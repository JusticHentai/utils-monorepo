import { action } from 'storybook/actions'
import unset from '../../../packages/js-utils/src/unset'

const unsetDemo = () => {
  // 基础：字符串路径
  const obj1 = { a: 1, c: 2 }
  const result1 = unset(obj1, 'a')
  action('unset - 字符串路径')({
    返回: result1,
    对象: obj1,
  })

  // 数组路径
  const obj2 = { a: 1, c: 2 }
  unset(obj2, ['a'])
  action('unset - 数组路径')({ 对象: obj2 })

  // 深层嵌套
  const obj3 = { a: { b: null } }
  unset(obj3, 'a.b')
  action('unset - 深层嵌套')({ 对象: obj3 })

  // 数组元素
  const obj4 = { items: [1, 2, 3] }
  unset(obj4, 'items[1]')
  action('unset - 数组元素')({ 对象: obj4 })

  // 不存在的路径返回 true
  const obj5 = { a: { b: { c: null } } }
  action('unset - 不存在路径仍返回 true')({
    'z': unset(obj5, 'z'),
    'a.z': unset(obj5, 'a.z'),
    'a.b.z': unset(obj5, 'a.b.z'),
    对象未被修改: JSON.stringify(obj5),
  })

  // null 对象安全
  action('unset - null 对象返回 true')({
    结果: unset(null as any, 'a.b'),
  })
}

export default unsetDemo
