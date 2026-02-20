import { action } from 'storybook/actions'
import isArray from '../../../packages/js-utils/src/isArray'

const edgeCaseDemo = () => {
  const results = {
    '[]': isArray([]),
    '[1,2,3]': isArray([1, 2, 3]),
    'string': isArray('abc'),
    'arguments': isArray({ length: 0 }),
    'null': isArray(null),
  }

  action('isArray - 边界情况')(results)
}

export default edgeCaseDemo
