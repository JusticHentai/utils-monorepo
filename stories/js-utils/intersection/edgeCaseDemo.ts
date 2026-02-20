import { action } from 'storybook/actions'
import intersection from '../../../packages/js-utils/src/intersection'

const edgeCaseDemo = () => {
  action('intersection - 边界情况')({
    '有交集': intersection([2, 1], [2, 3]), '空数组': intersection([], [1,2]), '无交集': intersection([1, 2], [3, 4])
  })
}

export default edgeCaseDemo
