import { action } from 'storybook/actions'
import toPairs from '../../../packages/js-utils/src/toPairs'
import { toPairsIn } from '../../../packages/js-utils/src/toPairs'

const toPairsDemo = () => {
  // 基础：对象转键值对
  action('toPairs - 基础')({
    输入: { a: 1, b: 2 },
    结果: toPairs({ a: 1, b: 2 }),
  })

  // 区分自有属性 vs 含继承属性
  function Foo(this: any) { this.a = 1 }
  Foo.prototype.b = 2
  const instance = new (Foo as any)()

  action('toPairs - 仅自有属性')({
    描述: 'Foo { a: 1 }, prototype.b = 2',
    结果: toPairs(instance),
  })

  action('toPairsIn - 含继承属性')({
    描述: 'Foo { a: 1 }, prototype.b = 2',
    结果: toPairsIn(instance),
  })

  // 包含 length 属性的对象
  action('toPairs - 含 length 属性的对象')({
    输入: { '0': 'a', '1': 'b', length: 2 },
    结果: toPairs({ '0': 'a', '1': 'b', length: 2 } as any),
  })

  // null 安全
  action('toPairs - null 返回空数组')({
    输入: null,
    结果: toPairs(null as any),
  })
}

export default toPairsDemo
