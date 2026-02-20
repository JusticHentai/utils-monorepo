import { action } from 'storybook/actions'
import keys from '../../../packages/js-utils/src/keys'

const keysDemo = () => {
  const obj = { a: 1, b: 2, c: 3 }
  action('keys - 普通对象')({ 输入: obj, 结果: keys(obj) })

  function Foo() { this.x = 1; this.y = 2 }
  Foo.prototype.z = 3
  action('keys - 不含继承属性')({ 结果: keys(new Foo()) })
}

export default keysDemo
