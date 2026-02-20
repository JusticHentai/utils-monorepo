import { action } from 'storybook/actions'
import unionBy from '../../../packages/js-utils/src/unionBy'

const edgeCaseDemo = () => {
  action('unionBy - 边界情况')({
    '取floor': unionBy([2.1], [1.2, 2.3], Math.floor), '空数组': unionBy([], [], Math.floor)
  })
}

export default edgeCaseDemo
