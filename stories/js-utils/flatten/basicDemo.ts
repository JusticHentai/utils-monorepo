import { action } from 'storybook/actions'
import flatten from '../../../packages/js-utils/src/flatten'

const basicDemo = () => {
  action('flatten - 展开一层')({
    输入: [1, [2, [3, [4]], 5]],
    结果: flatten([1, [2, [3, [4]], 5]]),
    说明: '只展开一层嵌套',
  })
}

export default basicDemo
