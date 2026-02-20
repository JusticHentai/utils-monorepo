import { action } from 'storybook/actions'
import max from '../../../packages/js-utils/src/max'
import min from '../../../packages/js-utils/src/min'

const maxDemo = () => {
  // lodash 测试: 返回最大值
  action('max - 基础')({
    'max([1, 2, 3])': max([1, 2, 3]),
    期望: 3,
  })

  // lodash 测试: 空集合返回 undefined
  action('max - 空数组')({
    'max([])': max([]),
    期望: undefined,
  })

  // lodash 测试: 字符串比较
  action('max - 字符串比较')({
    'max(["a", "b"])': max(['a', 'b']),
    期望: 'b',
  })

  // min 对比
  action('min - 基础')({
    'min([1, 2, 3])': min([1, 2, 3]),
    'min([])': min([]),
    'min(["a", "b"])': min(['a', 'b']),
  })

  // 负数
  action('max/min - 负数')({
    'max([-3, -1, -2])': max([-3, -1, -2]),
    'min([-3, -1, -2])': min([-3, -1, -2]),
  })
}

export default maxDemo