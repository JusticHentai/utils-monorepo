import { action } from 'storybook/actions'
import assignInWith from '../../../packages/js-utils/src/assignInWith'

const edgeCaseDemo = () => {
  // customizer 返回 undefined 时，回退到 source 值
  const r1 = assignInWith(
    { a: 1, b: 2 },
    { a: 10, b: 20, c: 30 },
    (objVal, srcVal) => {
      // 只对 number 类型做求和，其他返回 undefined（使用 source 值）
      if (typeof objVal === 'number' && typeof srcVal === 'number') {
        return objVal + srcVal
      }
      return undefined
    }
  )

  // customizer 接收 key 参数，可按 key 区分处理
  const r2 = assignInWith(
    { x: 'old', y: 'old' },
    { x: 'new', y: 'new', z: 'new' },
    (objVal, srcVal, key) => (key === 'x' ? objVal : srcVal)
  )

  // 来源为空对象
  const r3 = assignInWith({ a: 1 }, {}, (_o, s) => s)

  // 继承属性 + customizer 组合
  function Bar(this: Record<string, unknown>) {
    this.own = 'own'
  }
  Bar.prototype.proto = 'proto'
  // @ts-expect-error constructor call
  const source = new Bar()
  const r4 = assignInWith(
    {},
    source,
    (_objVal, srcVal) => String(srcVal).toUpperCase()
  )

  action('assignInWith - 边界情况')({
    'customizer 返回 undefined 回退': r1,
    '按 key 区分处理': r2,
    '空来源对象': r3,
    '继承属性 + customizer 转大写': r4,
  })
}

export default edgeCaseDemo
