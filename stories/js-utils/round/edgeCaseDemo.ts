import { action } from 'storybook/actions'
import round from '../../../packages/js-utils/src/round'

const edgeCaseDemo = () => {
  action('round - 边界情况')({
    'round(4.006)': round(4.006),
    'round(4.006, 2)': round(4.006, 2),
    'round(4060, -2)': round(4060, -2),
    'round(0.5)': round(0.5),
    'round(-0.5)': round(-0.5),
  })
}

export default edgeCaseDemo
