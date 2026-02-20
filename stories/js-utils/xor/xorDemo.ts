import { action } from 'storybook/actions'
import xor from '../../../packages/js-utils/src/xor'

const xorDemo = () => {
  action('xor - 基础')(xor([1, 2], [2, 3]))
  action('xor - 多个数组')(xor([1, 2], [2, 3], [3, 4]))
}

export default xorDemo
