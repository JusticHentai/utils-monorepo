import { action } from 'storybook/actions'
import uniqueId from '../../../packages/js-utils/src/uniqueId'

const uniqueIdDemo = () => {
  // 无前缀 - 返回纯数字字符串
  const id1 = uniqueId()
  const id2 = uniqueId()
  action('uniqueId - 无前缀递增')({
    id1,
    id2,
    类型: typeof id1,
    递增: Number(id2) > Number(id1),
  })

  // 带前缀
  action('uniqueId - 带前缀')({
    contact_: uniqueId('contact_'),
    contact_2: uniqueId('contact_'),
  })

  // 不同前缀共享计数器
  action('uniqueId - 不同前缀共享计数器')({
    user_: uniqueId('user_'),
    item_: uniqueId('item_'),
  })

  // 生成多个唯一 ID
  const ids = Array.from({ length: 5 }, () => uniqueId('id_'))
  const allUnique = new Set(ids).size === ids.length
  action('uniqueId - 批量生成验证唯一性')({
    ids,
    全部唯一: allUnique,
  })
}

export default uniqueIdDemo
