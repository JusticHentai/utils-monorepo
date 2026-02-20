import { action } from 'storybook/actions'
import eq from '../../../packages/js-utils/src/eq'

const eqDemo = () => {
  const object = { a: 1 }

  // SameValueZero 比较 — 从 lodash 测试用例提取
  action('eq - 相等的情况')({
    'eq(undefined, undefined)': eq(undefined, undefined),
    'eq(0, -0)': eq(0, -0),
    'eq(NaN, NaN)': eq(NaN, NaN),
    'eq(1, 1)': eq(1, 1),
    'eq(object, object)': eq(object, object),
  })

  action('eq - 不相等的情况')({
    'eq(null, undefined)': eq(null, undefined),
    'eq(1, Object(1))': eq(1, Object(1)),
    'eq(1, "1")': eq(1, '1'),
    'eq(object, { a: 1 })': eq(object, { a: 1 }),
  })
}

export default eqDemo
