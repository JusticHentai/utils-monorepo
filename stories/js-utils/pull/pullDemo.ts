import { action } from 'storybook/actions'
import pull from '../../../packages/js-utils/src/pull'
import pullAll from '../../../packages/js-utils/src/pullAll'

const pullDemo = () => {
  const arr1 = ['a', 'b', 'c', 'a', 'b']
  pull(arr1, 'a', 'c')
  action('pull - 移除 a, c')({ 结果: arr1 })

  const arr2 = [1, 2, 3, 1, 2]
  pullAll(arr2, [1, 3])
  action('pullAll - 移除 [1, 3]')({ 结果: arr2 })
}

export default pullDemo
