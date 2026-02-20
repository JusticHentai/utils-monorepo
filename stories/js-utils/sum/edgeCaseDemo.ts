import { action } from 'storybook/actions'
import sum from '../../../packages/js-utils/src/sum'

const edgeCaseDemo = () => {
  action('sum - 边界情况')({
    '正常数组': sum([4, 2, 8, 6]),
    '空数组': sum([]),
    '单元素': sum([5]),
    '含0': sum([0, 1, 2]),
  })
}

export default edgeCaseDemo
