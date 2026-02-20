import { action } from 'storybook/actions'
import forInRight from '../../../packages/js-utils/src/forInRight'

const forInRightDemo = () => {
  function Foo() { this.a = 1; this.b = 2 }
  Foo.prototype.c = 3
  const result = []
  forInRight(new Foo(), (value, key) => { result.push(key + ': ' + value) })
  action('forInRight 演示')({ '从右到左遍历（含继承）': result })
}

export default forInRightDemo
