import { action } from 'storybook/actions'
import uniq from '../../../packages/js-utils/src/uniq'

const edgeCaseDemo = () => {
  action('uniq - 边界情况')({
    '去重': uniq([2, 1, 2, 3, 1]), '空数组': uniq([]), '无重复': uniq([1, 2, 3])
  })
}

export default edgeCaseDemo
