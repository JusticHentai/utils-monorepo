import { action } from 'storybook/actions'
import isArrayLike from '../../../packages/js-utils/src/isArrayLike'

const edgeCaseDemo = () => {
  const results = {
    '[]': isArrayLike([]),
    'string': isArrayLike('abc'),
    '{length:0}': isArrayLike({ length: 0 }),
    '函数': isArrayLike(() => {}),
    'null': isArrayLike(null),
    'number': isArrayLike(123),
  }

  action('isArrayLike - 边界情况')(results)
}

export default edgeCaseDemo
