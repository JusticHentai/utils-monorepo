import { action } from 'storybook/actions'
import { flattenDepth } from '../../../packages/js-utils/src/flatten'

const depthDemo = () => {
  action('flattenDepth - 展开 2 层')({
    输入: [1, [2, [3, [4]], 5]],
    深度: 2,
    结果: flattenDepth([1, [2, [3, [4]], 5]], 2),
  })
}

export default depthDemo
