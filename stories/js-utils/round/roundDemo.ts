import { action } from 'storybook/actions'
import ceil from '../../../packages/js-utils/src/round'
import floor from '../../../packages/js-utils/src/floor'
import round from '../../../packages/js-utils/src/round'

const roundDemo = () => {
  action('ceil - 向上舍入')({
    'ceil(4.006)': ceil(4.006),
    'ceil(6.004, 2)': ceil(6.004, 2),
    'ceil(6040, -2)': ceil(6040, -2),
  })

  action('floor - 向下舍入')({
    'floor(4.006)': floor(4.006),
    'floor(0.046, 2)': floor(0.046, 2),
    'floor(4060, -2)': floor(4060, -2),
  })

  action('round - 四舍五入')({
    'round(4.006)': round(4.006),
    'round(4.006, 2)': round(4.006, 2),
    'round(4060, -2)': round(4060, -2),
  })
}

export default roundDemo
