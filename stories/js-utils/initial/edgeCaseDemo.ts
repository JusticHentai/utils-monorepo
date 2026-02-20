import { action } from 'storybook/actions'
import initial from '../../../packages/js-utils/src/initial'

const edgeCaseDemo = () => {
  action('initial - 边界情况')({
    '正常': initial([1, 2, 3]), '单元素': initial([1]), '空数组': initial([])
  })
}

export default edgeCaseDemo
