import { action } from 'storybook/actions'
import sortedLastIndex from '../../../packages/js-utils/src/sortedLastIndex'

const edgeCaseDemo = () => {
  action('sortedLastIndex - 边界情况')({
    '插入位置': sortedLastIndex([4,5,5,5,6], 5), '空数组': sortedLastIndex([], 1)
  })
}

export default edgeCaseDemo
