import { action } from 'storybook/actions'
import intersectionWith from '../../../packages/js-utils/src/intersectionWith'

const edgeCaseDemo = () => {
  action('intersectionWith - 边界情况')({
    '自定义比较': intersectionWith([{x:1},{x:2}], [{x:1}], (a,b) => a.x===b.x), '空数组': intersectionWith([], [{x:1}], (a,b) => a.x===b.x)
  })
}

export default edgeCaseDemo
