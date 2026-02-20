import { action } from 'storybook/actions'
import isEmpty from '../../../packages/js-utils/src/isEmpty'

const basicDemo = () => {
  // 空值返回 true
  action('isEmpty - 空值返回 true')({
    'null': isEmpty(null),
    'undefined': isEmpty(undefined),
    '[]': isEmpty([]),
    '{}': isEmpty({}),
    "''": isEmpty(''),
    'true': isEmpty(true),
    '1': isEmpty(1),
    'NaN': isEmpty(NaN),
  })

  // 非空值返回 false
  action('isEmpty - 非空值返回 false')({
    '[0]': isEmpty([0]),
    '{ a: 0 }': isEmpty({ a: 0 }),
    "'a'": isEmpty('a'),
  })

  // 有 length 属性的对象不为空
  action('isEmpty - length 属性对象')({
    '{ length: 0 }': isEmpty({ length: 0 }),
    说明: '有 key 的对象不为空',
  })

  // Map 和 Set
  action('isEmpty - Map/Set')({
    'new Map()': isEmpty(new Map()),
    'new Set()': isEmpty(new Set()),
    'Map(1项)': isEmpty(new Map([['a', 1]])),
    'Set(1项)': isEmpty(new Set([1])),
  })
}

export default basicDemo
