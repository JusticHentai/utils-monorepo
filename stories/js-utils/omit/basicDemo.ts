import { action } from 'storybook/actions'
import omit from '../../../packages/js-utils/src/omit'

const basicDemo = () => {
  const object = { a: 1, b: 2, c: 3, d: 4 }

  // lodash 测试: 排除指定属性
  action('omit - 排除属性')({
    'omit(obj, ["a", "c"])': omit(object, ['a', 'c']),
    期望: { b: 2, d: 4 },
  })

  // lodash 测试: 不修改原对象
  const original = { a: { b: 2 } }
  const result = omit(original, ['a'] as any)
  action('omit - 不修改原对象')({
    原对象: original,
    结果: result,
    '原对象未变': JSON.stringify(original) === '{"a":{"b":2}}',
  })

  // lodash 测试: nullish 对象返回空
  action('omit - null/undefined')({
    'omit(null, [])': omit(null as any, []),
    说明: 'nullish 输入返回空对象',
  })
}

export default basicDemo