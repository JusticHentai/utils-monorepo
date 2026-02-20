import { action } from 'storybook/actions'
import sortedIndexOf from '../../../packages/js-utils/src/sortedIndexOf'

const sortedIndexOfDemo = () => {
  action('sortedIndexOf 演示')({
    '4 在 [4, 5, 5, 5, 6] 中的索引': sortedIndexOf([4, 5, 5, 5, 6], 4),
    '5 在 [4, 5, 5, 5, 6] 中的索引': sortedIndexOf([4, 5, 5, 5, 6], 5),
    '3（不存在）': sortedIndexOf([4, 5, 5, 5, 6], 3),
  })
}

export default sortedIndexOfDemo
