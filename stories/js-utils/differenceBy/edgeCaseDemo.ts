import { action } from 'storybook/actions'
import differenceBy from '../../../packages/js-utils/src/differenceBy'

const edgeCaseDemo = () => {
  action('differenceBy - 边界情况')({
    '取floor': differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor), '空数组': differenceBy([], [1], Math.floor)
  })
}

export default edgeCaseDemo
