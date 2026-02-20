import { action } from 'storybook/actions'
import rangeRight from '../../../packages/js-utils/src/rangeRight'

const rangeRightDemo = () => {
  action('rangeRight 演示')({
    '(0, 4)': rangeRight(0, 4),
    '(0, 20, 5)': rangeRight(0, 20, 5),
    '(4)': rangeRight(4),
    '(0, -4, -1)': rangeRight(0, -4, -1),
  })
}

export default rangeRightDemo
