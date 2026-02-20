import { action } from 'storybook/actions'
import isWeakSet from '../../../packages/js-utils/src/isWeakSet'

const isWeakSetDemo = () => {
  action('isWeakSet 演示')({
    'new WeakSet()': isWeakSet(new WeakSet()),
    'new Set()': isWeakSet(new Set()),
    '[]': isWeakSet([]),
    'null': isWeakSet(null),
  })
}

export default isWeakSetDemo
