import { action } from 'storybook/actions'
import shuffle from '../../../packages/js-utils/src/shuffle'

const edgeCaseDemo = () => {
  const arr = [1, 2, 3, 4, 5]
  const original = [...arr]
  const shuffled = shuffle(arr)

  action('shuffle - 边界情况')({
    '原数组': original,
    '洗牌后': shuffled,
    '长度不变': shuffled.length === original.length,
  })
}

export default edgeCaseDemo
