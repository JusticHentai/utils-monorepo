import { action } from 'storybook/actions'
import { values, valuesIn } from '../../../packages/js-utils/src/keys'

const valuesDemo = () => {
  const obj = { a: 1, b: 'hello', c: true }
  action('values - 普通对象')({ 输入: obj, 结果: values(obj) })

  function Foo() { this.x = 1 }
  Foo.prototype.y = 2
  action('valuesIn - 包含继承值')({ 结果: valuesIn(new Foo()) })
}

export default valuesDemo
