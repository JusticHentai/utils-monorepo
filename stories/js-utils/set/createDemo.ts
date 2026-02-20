import { action } from 'storybook/actions'
import set from '../../../packages/js-utils/src/set'

const createDemo = () => {
  const object = {}
  set(object, 'a.b.c', 1)

  action('set - 自动创建中间路径')({
    初始对象: {},
    路径: 'a.b.c',
    值: 1,
    结果: object,
    说明: '自动创建不存在的中间路径',
  })

  const object2 = {}
  set(object2, 'a[0].b', 2)

  action('set - 创建数组')({
    结果: object2,
    说明: '路径包含数字索引时创建数组',
  })
}

export default createDemo
