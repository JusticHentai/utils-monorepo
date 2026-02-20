import { action } from 'storybook/actions'
import method from '../../../packages/js-utils/src/method'

const methodDemo = () => {
  // lodash 测试: 调用对象上指定路径的方法
  const obj = { a: () => 1 }
  const callA = method('a')
  action('method - 基础调用')({
    'method("a")(obj)': callA(obj),
    期望: 1,
  })

  // lodash 测试: 深层路径
  const deep = { a: { b: () => 2 } }
  action('method - 深层路径')({
    'method("a.b")(deep)': method('a.b')(deep),
    期望: 2,
  })

  // lodash 测试: 传递部分参数
  const obj2 = { fn: (...args: number[]) => args }
  action('method - 部分参数')({
    'method("fn", 1, 2, 3)(obj)': method('fn', 1, 2, 3)(obj2),
    期望: [1, 2, 3],
  })

  // lodash 测试: 深层方法的 this 绑定
  const withThis = { a: { b() { return (this as any).c }, c: 1 } }
  action('method - this 绑定')({
    'method("a.b")(withThis)': method('a.b')(withThis),
    说明: '深层方法的 this 绑定到父对象',
  })

  // lodash 测试: 路径不存在返回 undefined
  action('method - 路径不存在')({
    'method("x")(obj)': method('x')(obj),
    'method("a.b.c")({})': method('a.b.c')({}),
    期望: undefined,
  })
}

export default methodDemo