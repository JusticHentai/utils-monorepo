import { action } from 'storybook/actions'
import mean from '../../../packages/js-utils/src/mean'

const meanDemo = () => {
  // lodash 测试: 基础平均值
  action('mean - 基础')({
    'mean([4, 2, 8, 6])': mean([4, 2, 8, 6]),
    期望: 5,
  })

  // lodash 测试: 空数组返回 NaN
  action('mean - 空数组')({
    'mean([])': mean([]),
    'isNaN': isNaN(mean([])),
    说明: '空数组返回 NaN',
  })

  // 单元素
  action('mean - 单元素')({
    'mean([42])': mean([42]),
    期望: 42,
  })
}

export default meanDemo