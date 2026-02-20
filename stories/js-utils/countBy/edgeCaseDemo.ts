import { action } from 'storybook/actions'
import countBy from '../../../packages/js-utils/src/countBy'

const edgeCaseDemo = () => {
  action('countBy - 边界情况')({
    '按条件': countBy([6.1, 4.2, 6.3], Math.floor), '空数组': countBy([], Math.floor)
  })
}

export default edgeCaseDemo
