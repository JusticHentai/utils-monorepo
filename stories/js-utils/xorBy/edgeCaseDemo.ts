import { action } from 'storybook/actions'
import xorBy from '../../../packages/js-utils/src/xorBy'

const edgeCaseDemo = () => {
  action('xorBy - 边界情况')({
    '取floor': xorBy([2.1, 1.2], [2.3, 3.4], Math.floor), '空数组': xorBy([], [1], Math.floor)
  })
}

export default edgeCaseDemo
