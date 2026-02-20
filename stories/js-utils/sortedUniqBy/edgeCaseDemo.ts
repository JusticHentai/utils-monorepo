import { action } from 'storybook/actions'
import sortedUniqBy from '../../../packages/js-utils/src/sortedUniqBy'

const edgeCaseDemo = () => {
  action('sortedUniqBy - 边界情况')({
    '取floor去重': sortedUniqBy([1.1, 1.2, 2.3, 2.4], Math.floor), '空数组': sortedUniqBy([], Math.floor)
  })
}

export default edgeCaseDemo
