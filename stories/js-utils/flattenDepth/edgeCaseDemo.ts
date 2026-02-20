import { action } from 'storybook/actions'
import flattenDepth from '../../../packages/js-utils/src/flattenDepth'

const edgeCaseDemo = () => {
  action('flattenDepth - 边界情况')({
    '深度1': flattenDepth([1, [2, [3, [4]], 5]], 1), '深度2': flattenDepth([1, [2, [3, [4]], 5]], 2), '空数组': flattenDepth([], 1)
  })
}

export default edgeCaseDemo
