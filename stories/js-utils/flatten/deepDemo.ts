import { action } from 'storybook/actions'
import { flattenDeep } from '../../../packages/js-utils/src/flatten'

const deepDemo = () => {
  action('flattenDeep - 完全展开')({
    输入: [1, [2, [3, [4]], 5]],
    结果: flattenDeep([1, [2, [3, [4]], 5]]),
    说明: '递归展开所有嵌套',
  })
}

export default deepDemo
