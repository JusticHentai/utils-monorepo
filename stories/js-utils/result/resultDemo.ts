import { action } from 'storybook/actions'
import result from '../../../packages/js-utils/src/result'

const resultDemo = () => {
  // 基本值获取 (lodash: result({a:1}, 'a') => 1)
  action('result - 基本值')(result({ a: 1, b: 2 }, 'a'))

  // 函数自动调用 (lodash: result({b: stubB}, 'b') => 'b')
  const obj = { greet: () => 'Hello!' }
  action('result - 函数自动调用')(result(obj, 'greet'))

  // 深层路径 (lodash: result({a:{b:2}}, 'a.b') => 2)
  action('result - 深层路径')(result({ a: { b: { c: 3 } } }, 'a.b.c'))

  // 数组路径 (lodash: result({a:{b:2}}, ['a','b']) => 2)
  action('result - 数组路径')(result({ a: { b: 42 } }, ['a', 'b']))

  // 默认值 (lodash: result({}, 'x.y.z', 'default') => 'default')
  action('result - 默认值')(result({}, 'x.y.z', 'default'))

  // 默认值也可以是函数 (lodash: 返回调用结果)
  action('result - 不存在+默认值')(result({ a: {} }, 'a.b', 'fallback'))

  // null 对象返回 defaultValue
  action('result - null对象')(result(null as any, 'a', 'safe'))

  // 深层嵌套函数自动调用 (lodash test: value.a is a function returning {b: fn})
  const nested = { a: { b: function() { return 'called' } } }
  action('result - 嵌套函数调用')(result(nested, 'a.b'))
}

export default resultDemo