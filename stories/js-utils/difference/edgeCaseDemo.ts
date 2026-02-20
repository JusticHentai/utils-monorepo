import { action } from 'storybook/actions'
import difference from '../../../packages/js-utils/src/difference'

const edgeCaseDemo = () => {
  action('difference - 边界情况')({
    '多个排除数组': difference([1, 2, 3, 4, 5], [1, 2], [4]),
    '无交集': difference([1, 2, 3], [4, 5, 6]),
    '全部排除': difference([1, 2], [1, 2, 3]),
    '空排除数组': difference([1, 2, 3]),
    '空源数组': difference([], [1, 2]),
    '重复元素': difference([1, 1, 2, 2, 3], [2]),
  })
}

export default edgeCaseDemo
