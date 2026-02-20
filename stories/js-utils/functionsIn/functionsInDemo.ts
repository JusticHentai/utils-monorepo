import { action } from 'storybook/actions'
import functionsIn from '../../../packages/js-utils/src/functionsIn'

const functionsInDemo = () => {
  function Foo() { this.a = () => 'a'; this.b = () => 'b' }
  Foo.prototype.c = () => 'c'
  action('functionsIn 演示')({ '包含继承的方法名': functionsIn(new Foo()) })
}

export default functionsInDemo
