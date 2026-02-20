import { action } from 'storybook/actions'
import xorBy from '../../../packages/js-utils/src/xorBy'

const xorByDemo = () => {
  action('xorBy 演示')({
    'Math.floor 对称差集': xorBy([2.1, 1.2], [2.3, 3.4], Math.floor),
  })
}

export default xorByDemo
