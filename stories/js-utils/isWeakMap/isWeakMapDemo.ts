import { action } from 'storybook/actions'
import isWeakMap from '../../../packages/js-utils/src/isWeakMap'

const isWeakMapDemo = () => {
  action('isWeakMap 演示')({
    'new WeakMap()': isWeakMap(new WeakMap()),
    'new Map()': isWeakMap(new Map()),
    '{}': isWeakMap({}),
    'null': isWeakMap(null),
  })
}

export default isWeakMapDemo
