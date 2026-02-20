import { action } from 'storybook/actions'
import sortedUniq from '../../../packages/js-utils/src/sortedUniq'

const edgeCaseDemo = () => {
  action('sortedUniq - 边界情况')({
    '有重复': sortedUniq([1, 1, 2, 3, 3]), '空数组': sortedUniq([]), '无重复': sortedUniq([1, 2, 3])
  })
}

export default edgeCaseDemo
