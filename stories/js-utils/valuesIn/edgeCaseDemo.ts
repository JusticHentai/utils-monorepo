import { action } from 'storybook/actions'
import valuesIn from '../../../packages/js-utils/src/valuesIn'

const edgeCaseDemo = () => {
  action('valuesIn - 边界情况')({
    '含继承': (() => { function Foo() { this.a = 1 }; Foo.prototype.b = 2; return valuesIn(new Foo()) })(), '空对象': valuesIn({})
  })
}

export default edgeCaseDemo
