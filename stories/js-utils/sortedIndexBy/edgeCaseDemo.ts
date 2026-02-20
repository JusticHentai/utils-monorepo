import { action } from 'storybook/actions'
import sortedIndexBy from '../../../packages/js-utils/src/sortedIndexBy'

const edgeCaseDemo = () => {
  action('sortedIndexBy - 边界情况')({
    '对象数组': sortedIndexBy([{x:4},{x:5}], {x:4}, o => o.x), '空数组': sortedIndexBy([], {x:1}, o => o.x)
  })
}

export default edgeCaseDemo
