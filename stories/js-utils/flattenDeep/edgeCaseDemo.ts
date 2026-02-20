import { action } from 'storybook/actions'
import flattenDeep from '../../../packages/js-utils/src/flattenDeep'

const edgeCaseDemo = () => {
  action('flattenDeep - 边界情况')({
    '深层嵌套': flattenDeep([1, [2, [3, [4]], 5]]), '空数组': flattenDeep([]), '已扁平': flattenDeep([1, 2, 3])
  })
}

export default edgeCaseDemo
