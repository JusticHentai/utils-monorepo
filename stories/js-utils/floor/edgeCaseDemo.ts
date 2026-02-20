import { action } from 'storybook/actions'
import floor from '../../../packages/js-utils/src/floor'

const edgeCaseDemo = () => {
  action('floor - 边界情况')({
    'floor(4.906)': floor(4.906),
    'floor(0.046, 2)': floor(0.046, 2),
    'floor(4060, -2)': floor(4060, -2),
    'floor(0)': floor(0),
    'floor(-4.006)': floor(-4.006),
  })
}

export default edgeCaseDemo
