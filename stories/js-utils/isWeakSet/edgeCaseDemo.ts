import { action } from 'storybook/actions'
import isWeakSet from '../../../packages/js-utils/src/isWeakSet'

const edgeCaseDemo = () => {
  const results = {
    'new WeakSet()': isWeakSet(new WeakSet()),
    'new Set()': isWeakSet(new Set()),
    '[]': isWeakSet([]),
    'null': isWeakSet(null),
  }

  action('isWeakSet - 边界情况')(results)
}

export default edgeCaseDemo
