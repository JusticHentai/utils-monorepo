import { action } from 'storybook/actions'
import { pullAt } from '../../../packages/js-utils/src/pull'

const pullAtDemo = () => {
  const arr = ['a', 'b', 'c', 'd']
  const removed = pullAt(arr, [1, 3])

  action('pullAt - 移除索引 1, 3')({
    剩余: arr,
    被移除: removed,
  })
}

export default pullAtDemo
