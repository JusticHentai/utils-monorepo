import { action } from 'storybook/actions'
import sortedLastIndexBy from '../../../packages/js-utils/src/sortedLastIndexBy'

const edgeCaseDemo = () => {
  action('sortedLastIndexBy - 边界情况')({
    '对象数组': sortedLastIndexBy([{x:4},{x:5}], {x:4}, o => o.x), '空数组': sortedLastIndexBy([], {x:1}, o => o.x)
  })
}

export default edgeCaseDemo
