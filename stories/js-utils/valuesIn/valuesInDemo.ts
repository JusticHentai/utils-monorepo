import { action } from 'storybook/actions'
import valuesIn from '../../../packages/js-utils/src/valuesIn'

const valuesInDemo = () => {
  function Foo() { this.a = 1; this.b = 2 }
  Foo.prototype.c = 3
  action('valuesIn 演示')({ '包含继承的值': valuesIn(new Foo()) })
}

export default valuesInDemo
