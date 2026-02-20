import { action } from 'storybook/actions'
import unionWith from '../../../packages/js-utils/src/unionWith'

const edgeCaseDemo = () => {
  action('unionWith - 边界情况')({
    '自定义比较': unionWith([{x:1}], [{x:2},{x:1}], (a,b) => a.x===b.x), '空数组': unionWith([], [], (a,b) => a===b)
  })
}

export default edgeCaseDemo
