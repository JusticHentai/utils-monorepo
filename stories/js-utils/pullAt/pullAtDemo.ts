import { action } from 'storybook/actions'
import pullAt from '../../../packages/js-utils/src/pullAt'

const pullAtDemo = () => {
  const array = ['a', 'b', 'c', 'd']
  const pulled = pullAt(array, [1, 3])
  action('pullAt 演示')({ '原数组': array, '被移除的元素': pulled })
}

export default pullAtDemo
