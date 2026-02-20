import { action } from 'storybook/actions'
import sampleSize from '../../../packages/js-utils/src/sampleSize'

const edgeCaseDemo = () => {
  action('sampleSize - 边界情况')({
    '取2个': sampleSize([1,2,3,4], 2), '超过长度': sampleSize([1,2], 5), '空数组': sampleSize([], 2), '取0个': sampleSize([1,2,3], 0)
  })
}

export default edgeCaseDemo
