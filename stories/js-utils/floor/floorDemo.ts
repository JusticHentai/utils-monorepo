import { action } from 'storybook/actions'
import floor from '../../../packages/js-utils/src/floor'

const floorDemo = () => {
  action('floor 演示')({ '4.006': floor(4.006), '0.046精度2': floor(0.046, 2), '4060精度-2': floor(4060, -2) })
}

export default floorDemo
