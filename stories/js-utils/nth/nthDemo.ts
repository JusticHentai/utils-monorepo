import { action } from 'storybook/actions'
import nth from '../../../packages/js-utils/src/nth'

const nthDemo = () => {
  const arr = ['a', 'b', 'c', 'd']

  // lodash 测试: 按索引获取元素
  action('nth - 正索引')({
    'nth(arr, 0)': nth(arr, 0),
    'nth(arr, 1)': nth(arr, 1),
    'nth(arr, 2)': nth(arr, 2),
    'nth(arr, 3)': nth(arr, 3),
  })

  // lodash 测试: 负索引
  action('nth - 负索引')({
    'nth(arr, -1)': nth(arr, -1),
    'nth(arr, -2)': nth(arr, -2),
    'nth(arr, -3)': nth(arr, -3),
    'nth(arr, -4)': nth(arr, -4),
    说明: '负索引从末尾开始: -1 => d, -2 => c, ...',
  })

  // lodash 测试: 默认返回第一个元素
  action('nth - 默认索引')({
    'nth(arr)': nth(arr),
    期望: 'a',
  })

  // lodash 测试: 空数组 / 超出范围
  action('nth - 边界')({
    'nth([], 0)': nth([], 0),
    'nth(arr, Infinity)': nth(arr, Infinity),
    'nth(arr, 4)': nth(arr, 4),
    说明: '空数组或超出范围返回 undefined',
  })
}

export default nthDemo