import { action } from 'storybook/actions'
import inRange from '../../../packages/js-utils/src/inRange'

const edgeCaseDemo = () => {
  action('inRange - 边界情况')({
    '3在2-4之间': inRange(3, 2, 4), '4不在2-4之间': inRange(4, 2, 4), '负数范围': inRange(-3, -4, -2), '1.2在0-2之间': inRange(1.2, 0, 2)
  })
}

export default edgeCaseDemo
