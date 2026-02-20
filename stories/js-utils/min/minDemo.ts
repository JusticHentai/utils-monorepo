import { action } from 'storybook/actions'
import min from '../../../packages/js-utils/src/min'

const minDemo = () => {
  action('min 演示')({
    '[4, 2, 8, 6]': min([4, 2, 8, 6]),
    '空数组': min([]),
  })
}

export default minDemo
