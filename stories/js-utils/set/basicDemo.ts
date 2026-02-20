import { action } from 'storybook/actions'
import set from '../../../packages/js-utils/src/set'

const basicDemo = () => {
  const object = { a: [{ b: { c: 3 } }] }
  set(object, 'a[0].b.c', 4)

  action('set - 设置嵌套值')({
    结果: object,
    说明: 'a[0].b.c 被设置为 4',
  })

  const object2 = { a: { b: 2 } }
  set(object2, ['x', '0', 'y', 'z'], 5)

  action('set - 数组路径')({
    结果: object2,
    说明: '使用数组格式的路径',
  })
}

export default basicDemo
