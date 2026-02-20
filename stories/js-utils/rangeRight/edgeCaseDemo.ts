import { action } from 'storybook/actions'
import rangeRight from '../../../packages/js-utils/src/rangeRight'

const edgeCaseDemo = () => {
  action('rangeRight - 边界情况')({
    '0到3': rangeRight(4), '1到4': rangeRight(1, 5), '步长2': rangeRight(0, 20, 5), '空范围': rangeRight(0)
  })
}

export default edgeCaseDemo
