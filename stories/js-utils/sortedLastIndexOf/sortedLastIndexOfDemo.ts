import { action } from 'storybook/actions'
import sortedLastIndexOf from '../../../packages/js-utils/src/sortedLastIndexOf'

const sortedLastIndexOfDemo = () => {
  action('sortedLastIndexOf 演示')({
    '5 在 [4, 5, 5, 5, 6] 中的最后索引': sortedLastIndexOf([4, 5, 5, 5, 6], 5),
    '4 的最后索引': sortedLastIndexOf([4, 5, 5, 5, 6], 4),
    '3（不存在）': sortedLastIndexOf([4, 5, 5, 5, 6], 3),
  })
}

export default sortedLastIndexOfDemo
