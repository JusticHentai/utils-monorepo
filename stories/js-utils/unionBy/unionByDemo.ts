import { action } from 'storybook/actions'
import unionBy from '../../../packages/js-utils/src/unionBy'

const unionByDemo = () => {
  action('unionBy 演示')({
    'Math.floor 合并去重': unionBy([2.1], [1.2, 2.3], Math.floor),
  })
}

export default unionByDemo
