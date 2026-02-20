import { action } from 'storybook/actions'
import create from '../../../packages/js-utils/src/create'

const inheritanceDemo = () => {
  // 模拟经典继承模式
  function Shape() {}
  Shape.prototype.type = 'shape'

  const circle = create(Shape.prototype, { constructor: function Circle() {}, radius: 10 })

  action('create - 经典继承模式')({
    type: (circle as any).type,
    radius: (circle as any).radius,
    isShapeInstance: circle instanceof (Shape as any),
    说明: 'circle 继承了 Shape.prototype，是 Shape 的实例',
  })

  // 只传自有属性
  function Foo() {}
  Foo.prototype.b = 2
  const fooInstance = { a: 1, c: 3 }
  const result = create({}, fooInstance)

  action('create - 只复制自有属性')({
    结果: result,
    说明: '只有自有属性 a 和 c 被复制',
  })
}

export default inheritanceDemo
