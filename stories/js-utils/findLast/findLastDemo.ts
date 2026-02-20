import { action } from 'storybook/actions'
import findLast from '../../../packages/js-utils/src/findLast'

const findLastDemo = () => {
  action('findLast 演示')({
    '从右查找偶数': findLast([1, 2, 3, 4], (n) => n % 2 === 0),
  })
}

export default findLastDemo
