import { action } from 'storybook/actions'
import flattenDepth from '../../../packages/js-utils/src/flattenDepth'

const flattenDepthDemo = () => {
  action('flattenDepth 演示')({
    '扁平化深度 1': flattenDepth([1, [2, [3, [4]], 5]], 1),
    '扁平化深度 2': flattenDepth([1, [2, [3, [4]], 5]], 2),
  })
}

export default flattenDepthDemo
