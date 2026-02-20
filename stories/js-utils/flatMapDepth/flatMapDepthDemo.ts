import { action } from 'storybook/actions'
import flatMapDepth from '../../../packages/js-utils/src/flatMapDepth'

const flatMapDepthDemo = () => {
  action('flatMapDepth 演示')({
    '指定深度 1': flatMapDepth([1, 2], (n) => [[[n, n]]], 1),
    '指定深度 2': flatMapDepth([1, 2], (n) => [[[n, n]]], 2),
  })
}

export default flatMapDepthDemo
