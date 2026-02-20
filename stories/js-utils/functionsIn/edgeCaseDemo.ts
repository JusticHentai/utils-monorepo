import { action } from 'storybook/actions'
import functionsIn from '../../../packages/js-utils/src/functionsIn'

const edgeCaseDemo = () => {
  action('functionsIn - 边界情况')({
    '含继承': (() => { function Foo() { this.a = () => {} }; Foo.prototype.b = () => {}; return functionsIn(new Foo()) })()
  })
}

export default edgeCaseDemo
