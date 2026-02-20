import { action } from 'storybook/actions'
import pullAll from '../../../packages/js-utils/src/pullAll'

const pullAllDemo = () => {
  const array = ['a', 'b', 'c', 'a', 'b', 'c']
  pullAll(array, ['a', 'c'])
  action('pullAll 演示')({ '移除 a 和 c 后': array })
}

export default pullAllDemo
