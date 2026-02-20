import { action } from 'storybook/actions'
import hasIn from '../../../packages/js-utils/src/hasIn'

const hasInDemo = () => {
  function Foo() { this.a = 1 }
  Foo.prototype.b = 2
  const obj = new Foo()
  action('hasIn 演示')({
    '自有属性 a': hasIn(obj, 'a'),
    '继承属性 b': hasIn(obj, 'b'),
    '不存在的 c': hasIn(obj, 'c'),
  })
}

export default hasInDemo
