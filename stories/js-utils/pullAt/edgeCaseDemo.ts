import { action } from 'storybook/actions'
import pullAt from '../../../packages/js-utils/src/pullAt'

const edgeCaseDemo = () => {
  const a = ['a', 'b', 'c', 'd']
  const removed = pullAt(a, [1, 3])

  action('pullAt - 边界情况')({
    '按索引移除': { 数组: a, 移除的: removed },
  })
}

export default edgeCaseDemo
