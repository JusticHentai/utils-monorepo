import { action } from 'storybook/actions'
import curryRight from '../../../packages/js-utils/src/curryRight'

const edgeCaseDemo = () => {
  const abc = (a, b, c) => [a, b, c]
  const curried = curryRight(abc)
  action('curryRight - 边界情况')({
    '右向柯里化': curried(3)(2)(1),
    '一次传多参': curried(2, 3)(1),
  })
}

export default edgeCaseDemo
