import { action } from 'storybook/actions'
import last from '../../../packages/js-utils/src/last'

const edgeCaseDemo = () => {
  action('last - 边界情况')({
    '正常': last([1, 2, 3]), '单元素': last([1]), '空数组': last([])
  })
}

export default edgeCaseDemo
