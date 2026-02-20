import { action } from 'storybook/actions'
import { findLast } from '../../../packages/js-utils/src/find'

const findLastDemo = () => {
  const nums = [1, 2, 3, 4, 5]
  action('findLast - 从右查找第一个偶数')(findLast(nums, (n) => n % 2 === 0))
}

export default findLastDemo
