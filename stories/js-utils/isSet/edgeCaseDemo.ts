import { action } from 'storybook/actions'
import isSet from '../../../packages/js-utils/src/isSet'

const edgeCaseDemo = () => {
  const results = {
    'new Set()': isSet(new Set()),
    'new WeakSet()': isSet(new WeakSet()),
    '[]': isSet([]),
    'null': isSet(null),
  }

  action('isSet - 边界情况')(results)
}

export default edgeCaseDemo
