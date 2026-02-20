import { action } from 'storybook/actions'
import isWeakMap from '../../../packages/js-utils/src/isWeakMap'

const edgeCaseDemo = () => {
  const results = {
    'new WeakMap()': isWeakMap(new WeakMap()),
    'new Map()': isWeakMap(new Map()),
    '{}': isWeakMap({}),
    'null': isWeakMap(null),
  }

  action('isWeakMap - 边界情况')(results)
}

export default edgeCaseDemo
