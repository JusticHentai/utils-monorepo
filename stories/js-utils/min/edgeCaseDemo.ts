import { action } from 'storybook/actions'
import min from '../../../packages/js-utils/src/min'

const edgeCaseDemo = () => {
  action('min - 边界情况')({
    '正常数组': min([4, 2, 8, 6]),
    '空数组': min([]),
    '含负数': min([-1, -5, 3]),
    '单元素': min([42]),
  })
}

export default edgeCaseDemo
