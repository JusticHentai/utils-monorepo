import { action } from 'storybook/actions'
import slice from '../../../packages/js-utils/src/slice'

const edgeCaseDemo = () => {
  action('slice - 边界情况')({
    '正常切片': slice([1, 2, 3, 4], 1, 3), '只有start': slice([1, 2, 3], 1), '空数组': slice([], 0, 1), '超出范围': slice([1, 2], 0, 10)
  })
}

export default edgeCaseDemo
