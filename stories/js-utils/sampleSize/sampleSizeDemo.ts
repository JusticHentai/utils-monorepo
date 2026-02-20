import { action } from 'storybook/actions'
import sampleSize from '../../../packages/js-utils/src/sampleSize'

const sampleSizeDemo = () => {
  action('sampleSize 演示')({
    '从 [1,2,3] 中随机取 2 个': sampleSize([1, 2, 3], 2),
    '从 [1,2,3] 中随机取 5 个（超出长度）': sampleSize([1, 2, 3], 5),
  })
}

export default sampleSizeDemo
