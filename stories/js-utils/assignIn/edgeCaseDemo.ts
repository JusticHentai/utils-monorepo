import { action } from 'storybook/actions'
import assignIn from '../../../packages/js-utils/src/assignIn'

const edgeCaseDemo = () => {
  action('assignIn - 边界情况')({
    '含继承属性': (() => { function Foo() { this.a = 1 }; Foo.prototype.b = 2; return assignIn({}, new Foo()) })(), '空对象': assignIn({}, {})
  })
}

export default edgeCaseDemo
