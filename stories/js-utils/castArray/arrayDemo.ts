import { action } from 'storybook/actions'
import castArray from '../../../packages/js-utils/src/castArray'

const arrayDemo = () => {
  const arr = [1, 2, 3]
  const result = castArray(arr)

  action('castArray - 数组返回同一引用')({
    输入: arr,
    输出: result,
    是否同一引用: arr === result,
    说明: '已经是数组的值直接返回原引用，不会创建新数组',
  })

  // 嵌套数组不会被展平
  const nested = [[1, 2], [3, 4]]
  action('castArray - 嵌套数组不展平')({
    输入: nested,
    输出: castArray(nested),
    是否同一引用: nested === castArray(nested),
  })
}

export default arrayDemo
