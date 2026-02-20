import { action } from 'storybook/actions'
import isSet from '../../../packages/js-utils/src/isSet'

const isSetDemo = () => {
  action('isSet 演示')({
    'new Set()': isSet(new Set()),
    'new WeakSet()': isSet(new WeakSet()),
    '[]': isSet([]),
    'null': isSet(null),
  })
}

export default isSetDemo
