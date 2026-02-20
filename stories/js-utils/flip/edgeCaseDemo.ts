import { action } from 'storybook/actions'
import flip from '../../../packages/js-utils/src/flip'

const edgeCaseDemo = () => {
  const flipped = flip((...args) => args)
  action('flip - 边界情况')({
    '翻转参数': flipped('a', 'b', 'c', 'd'),
    '无参数': flipped(),
    '单参数': flipped('x'),
  })
}

export default edgeCaseDemo
