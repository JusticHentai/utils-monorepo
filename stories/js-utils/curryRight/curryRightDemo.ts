import { action } from 'storybook/actions'
import curryRight from '../../../packages/js-utils/src/curryRight'

const curryRightDemo = () => {
  const abc = (a, b, c) => [a, b, c]
  const curried = curryRight(abc)
  action('curryRight 演示')({
    'curried(3)(2)(1)': curried(3)(2)(1),
    'curried(2, 3)(1)': curried(2, 3)(1),
  })
}

export default curryRightDemo
