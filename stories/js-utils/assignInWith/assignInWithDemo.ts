import { action } from 'storybook/actions'
import assignIn from '../../../packages/js-utils/src/assignIn'
import assignInWith from '../../../packages/js-utils/src/assignInWith'

const assignInWithDemo = () => {
  // 构造带继承属性的来源对象
  function Foo(this: Record<string, unknown>) {
    this.a = 1
    this.b = 'hello'
  }
  Foo.prototype.inherited = 'from proto'

  // @ts-expect-error constructor call
  const source = new Foo()

  // assignIn：直接覆盖，无法自定义逻辑
  const r1 = assignIn({ a: 99, c: 3 }, source)

  // assignInWith：通过 customizer 控制分配行为
  // 这里的策略：如果目标已有值，保留目标值；否则用来源值
  const r2 = assignInWith(
    { a: 99, c: 3 },
    source,
    (objVal, srcVal) => (objVal !== undefined ? objVal : srcVal)
  )

  action('assignInWith vs assignIn')({
    'assignIn（直接覆盖）': r1,
    'assignInWith（保留已有值）': r2,
  })
}

export default assignInWithDemo
