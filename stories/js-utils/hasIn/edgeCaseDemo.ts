import { action } from 'storybook/actions'
import hasIn from '../../../packages/js-utils/src/hasIn'

const edgeCaseDemo = () => {
  action('hasIn - 边界情况')({
    '含继承': (() => { function Foo() { this.a = 1 }; Foo.prototype.b = 2; return { a: hasIn(new Foo(), 'a'), b: hasIn(new Foo(), 'b'), c: hasIn(new Foo(), 'c') } })()
  })
}

export default edgeCaseDemo
