import { action } from 'storybook/actions'
import keysIn from '../../../packages/js-utils/src/keysIn'

const keysInDemo = () => {
  function Foo() { this.a = 1; this.b = 2 }
  Foo.prototype.c = 3
  action('keysIn 演示')({ '包含继承的键': keysIn(new Foo()) })
}

export default keysInDemo
