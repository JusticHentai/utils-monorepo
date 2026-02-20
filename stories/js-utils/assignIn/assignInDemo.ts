import { action } from 'storybook/actions'
import assignIn from '../../../packages/js-utils/src/assignIn'

const assignInDemo = () => {
  function Foo() { this.a = 1 }
  Foo.prototype.b = 2
  action('assignIn 演示')({
    '含继承属性': assignIn({ c: 3 }, new Foo()),
  })
}

export default assignInDemo
