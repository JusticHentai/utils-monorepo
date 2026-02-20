import { action } from 'storybook/actions'
import sortedLastIndex from '../../../packages/js-utils/src/sortedLastIndex'

const sortedLastIndexDemo = () => {
  action('sortedLastIndex 演示')({
    '4 在 [4, 5, 5, 5, 6] 中的最后索引': sortedLastIndex([4, 5, 5, 5, 6], 5),
    '3 应该插入的最后位置': sortedLastIndex([4, 5, 5, 5, 6], 3),
  })
}

export default sortedLastIndexDemo
