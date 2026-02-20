import { action } from 'storybook/actions'
import { findLastIndex } from '../../../packages/js-utils/src/findIndex'

const findLastIndexDemo = () => {
  const users = [
    { user: 'barney', active: true },
    { user: 'fred', active: false },
    { user: 'pebbles', active: false },
  ]

  action('findLastIndex - 从末尾查找')({
    结果: findLastIndex(users, (o) => !o.active),
    说明: '返回最后一个匹配元素的索引',
  })

  action('findLastIndex - 指定起始位置')({
    结果: findLastIndex(users, (o) => !o.active, 1),
    说明: '从索引 1 开始向前查找',
  })
}

export default findLastIndexDemo
