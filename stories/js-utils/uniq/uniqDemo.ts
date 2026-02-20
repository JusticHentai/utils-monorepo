import { action } from 'storybook/actions'
import uniq from '../../../packages/js-utils/src/uniq'
import uniqBy from '../../../packages/js-utils/src/uniqBy'
import uniqWith from '../../../packages/js-utils/src/uniqWith'
import isEqual from '../../../packages/js-utils/src/isEqual'

const uniqDemo = () => {
  // 基础去重 - 保留首次出现
  action('uniq - 基础去重')({
    输入: [2, 1, 2],
    结果: uniq([2, 1, 2]),
  })

  // 用于 map 迭代
  const arrays = [[2, 1, 2], [1, 2, 1]]
  action('uniq - 作为 map 迭代器')({
    输入: arrays,
    结果: arrays.map((arr) => uniq(arr)),
  })

  // 空数组
  action('uniq - 空数组')(uniq([]))

  // uniqBy - Math.floor
  action('uniqBy - Math.floor 去重')({
    输入: [2.1, 1.2, 2.3],
    结果: uniqBy([2.1, 1.2, 2.3], Math.floor),
  })

  // uniqBy - 按属性去重
  const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 1, name: 'Alice2' },
  ]
  action('uniqBy - 按属性函数去重')({
    输入: users,
    结果: uniqBy(users, (u) => u.id),
  })

  // uniqWith - 深度比较
  const objects = [
    { x: 1, y: 2 },
    { x: 2, y: 1 },
    { x: 1, y: 2 },
  ]
  action('uniqWith - 深度比较去重')({
    输入: objects,
    结果: uniqWith(objects, isEqual),
  })
}

export default uniqDemo
