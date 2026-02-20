import { action } from 'storybook/actions'
import without from '../../../packages/js-utils/src/without'

const edgeCaseDemo = () => {
  action('without - 边界情况')({
    '移除元素': without([2, 1, 2, 3], 1, 2), '空数组': without([], 1), '无匹配': without([1, 2, 3], 4, 5)
  })
}

export default edgeCaseDemo
