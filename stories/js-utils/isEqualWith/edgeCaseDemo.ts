import { action } from 'storybook/actions'
import isEqualWith from '../../../packages/js-utils/src/isEqualWith'

const edgeCaseDemo = () => {
  const customizer = (a, b) => typeof a === 'string' && typeof b === 'string' ? a.toLowerCase() === b.toLowerCase() : undefined
  const results = {
    '自定义比较ABC===abc': isEqualWith('ABC', 'abc', customizer),
    '自定义比较不等': isEqualWith('ABC', 'xyz', customizer),
    '数组相等': isEqualWith([1, 2], [1, 2], () => undefined),
    'null比较': isEqualWith(null, null, () => undefined),
  }

  action('isEqualWith - 边界情况')(results)
}

export default edgeCaseDemo
