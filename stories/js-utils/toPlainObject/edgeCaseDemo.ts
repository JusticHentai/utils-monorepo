import { action } from 'storybook/actions'
import toPlainObject from '../../../packages/js-utils/src/toPlainObject'

const edgeCaseDemo = () => {
  action('toPlainObject - 边界情况')({
    '转为普通对象': (() => { function Foo() { this.a = 1 }; Foo.prototype.b = 2; return toPlainObject(new Foo()) })()
  })
}

export default edgeCaseDemo
