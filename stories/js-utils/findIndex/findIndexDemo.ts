import { action } from 'storybook/actions'
import findIndex from '../../../packages/js-utils/src/findIndex'

const findIndexDemo = () => {
  const objects = [
    { a: 0, b: 0 },
    { a: 1, b: 1 },
    { a: 2, b: 2 },
  ]

  // 返回匹配元素的索引
  action('findIndex - 返回匹配索引')(
    findIndex(objects, (obj) => Boolean(obj.a)),
  )

  // 找不到返回 -1
  action('findIndex - 找不到返回 -1')(
    findIndex(objects, (obj) => obj.a === 3),
  )

  // 空数组返回 -1
  action('findIndex - 空数组')(
    findIndex([], () => true),
  )
}

export default findIndexDemo
