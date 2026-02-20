import { action } from 'storybook/actions'
import xorWith from '../../../packages/js-utils/src/xorWith'

const edgeCaseDemo = () => {
  action('xorWith - 边界情况')({
    '自定义比较': xorWith([{x:1},{x:2}], [{x:1}], (a,b) => a.x===b.x), '空数组': xorWith([], [{x:1}], (a,b) => a.x===b.x)
  })
}

export default edgeCaseDemo
