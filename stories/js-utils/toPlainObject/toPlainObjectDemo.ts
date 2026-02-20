import { action } from 'storybook/actions'
import toPlainObject from '../../../packages/js-utils/src/toPlainObject'

const toPlainObjectDemo = () => {
  function Foo() { this.a = 1 }
  Foo.prototype.b = 2

  action('toPlainObject 演示')({
    '普通对象': toPlainObject({ a: 1 }),
    '类实例（含原型属性）': toPlainObject(new Foo()),
  })
}

export default toPlainObjectDemo
