import { action } from 'storybook/actions'
import uniq from '../../../packages/js-utils/src/uniq'

const basicDemo = () => {
  // 基础去重
  action('uniq - 基础去重')({
    输入: [2, 1, 2],
    结果: uniq([2, 1, 2]),
  })

  // 字符串去重
  action('uniq - 字符串去重')({
    输入: ['a', 'b', 'a', 'c', 'b'],
    结果: uniq(['a', 'b', 'a', 'c', 'b']),
  })

  // 空数组
  action('uniq - 空数组')(uniq([]))
}

export default basicDemo
