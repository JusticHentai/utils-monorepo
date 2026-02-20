import { action } from 'storybook/actions'
import intersectionBy from '../../../packages/js-utils/src/intersectionBy'

const edgeCaseDemo = () => {
  action('intersectionBy - 边界情况')({
    '取floor': intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor), '空数组': intersectionBy([], [1], Math.floor)
  })
}

export default edgeCaseDemo
