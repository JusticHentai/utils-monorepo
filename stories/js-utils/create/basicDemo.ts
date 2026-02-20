import { action } from 'storybook/actions'
import create from '../../../packages/js-utils/src/create'

const basicDemo = () => {
  // 创建继承原型的对象
  const proto = {
    greet() { return 'hello from proto' },
  }

  const obj = create(proto, { name: 'Alice', age: 25 })

  action('create - 基础继承')({
    name: (obj as any).name,
    age: (obj as any).age,
    greet: (obj as any).greet(),
    hasOwnName: Object.prototype.hasOwnProperty.call(obj, 'name'),
    hasOwnGreet: Object.prototype.hasOwnProperty.call(obj, 'greet'),
    说明: 'name/age 是自有属性，greet 是继承属性',
  })
}

export default basicDemo
