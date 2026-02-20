import { action } from 'storybook/actions'
import sortedIndexOf from '../../../packages/js-utils/src/sortedIndexOf'

const edgeCaseDemo = () => {
  action('sortedIndexOf - 边界情况')({
    '找到': sortedIndexOf([4,5,5,5,6], 5), '未找到': sortedIndexOf([1,2,3], 4), '空数组': sortedIndexOf([], 1)
  })
}

export default edgeCaseDemo
