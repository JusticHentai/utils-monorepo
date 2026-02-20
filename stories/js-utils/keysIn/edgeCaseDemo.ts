import { action } from 'storybook/actions'
import keysIn from '../../../packages/js-utils/src/keysIn'

const edgeCaseDemo = () => {
  action('keysIn - 边界情况')({
    '含继承': (() => { function Foo() { this.a = 1 }; Foo.prototype.b = 2; return keysIn(new Foo()) })(), '空对象': keysIn({})
  })
}

export default edgeCaseDemo
