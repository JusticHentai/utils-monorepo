import { action } from 'storybook/actions'
import find from '../../../packages/js-utils/src/find'

const findDemo = () => {
  const objects = [
    { a: 0, b: 0 },
    { a: 1, b: 1 },
    { a: 2, b: 2 },
  ]

  // 返回第一个满足条件的元素
  action('find - 返回第一个 truthy 元素')(
    find(objects, (obj) => Boolean(obj.a)),
  )

  // 找不到返回 undefined
  action('find - 找不到返回 undefined')(
    find(objects, (obj) => obj.a === 3),
  )

  // 空数组返回 undefined
  action('find - 空数组')(
    find([], () => true),
  )
}

export default findDemo
