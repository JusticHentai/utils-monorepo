import { action } from 'storybook/actions'
import flattenDeep from '../../../packages/js-utils/src/flattenDeep'

const flattenDeepDemo = () => {
  action('flattenDeep 演示')({
    '完全扁平化': flattenDeep([1, [2, [3, [4]], 5]]),
  })
}

export default flattenDeepDemo
