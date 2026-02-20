import { action } from 'storybook/actions'
import differenceWith from '../../../packages/js-utils/src/differenceWith'

const edgeCaseDemo = () => {
  action('differenceWith - 边界情况')({
    '自定义比较': differenceWith([{x:1},{x:2}], [{x:1}], (a,b) => a.x===b.x), '空数组': differenceWith([], [{x:1}], (a,b) => a.x===b.x)
  })
}

export default edgeCaseDemo
