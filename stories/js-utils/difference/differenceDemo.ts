import { action } from 'storybook/actions'
import difference from '../../../packages/js-utils/src/difference'

const differenceDemo = () => {
  action('difference')({
    输入: { array: [2, 1, 3], values: [2, 3] },
    结果: difference([2, 1, 3], [2, 3]),
  })
}

export default differenceDemo
