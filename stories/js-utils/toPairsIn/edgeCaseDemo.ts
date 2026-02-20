import { action } from 'storybook/actions'
import toPairsIn from '../../../packages/js-utils/src/toPairsIn'

const edgeCaseDemo = () => {
  action('toPairsIn - 边界情况')({
    '含继承': (() => { function Foo() { this.a = 1 }; Foo.prototype.b = 2; return toPairsIn(new Foo()) })(), '空对象': toPairsIn({})
  })
}

export default edgeCaseDemo
