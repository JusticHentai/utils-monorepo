import { action } from 'storybook/actions'
import uniqBy from '../../../packages/js-utils/src/uniqBy'

const edgeCaseDemo = () => {
  action('uniqBy - 边界情况')({
    '取floor去重': uniqBy([2.1, 1.2, 2.3], Math.floor), '空数组': uniqBy([], Math.floor)
  })
}

export default edgeCaseDemo
