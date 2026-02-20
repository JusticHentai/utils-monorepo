import { action } from 'storybook/actions'
import sortedLastIndexOf from '../../../packages/js-utils/src/sortedLastIndexOf'

const edgeCaseDemo = () => {
  action('sortedLastIndexOf - 边界情况')({
    '找到': sortedLastIndexOf([4,5,5,5,6], 5), '未找到': sortedLastIndexOf([1,2,3], 4), '空数组': sortedLastIndexOf([], 1)
  })
}

export default edgeCaseDemo
