import { action } from 'storybook/actions'
import isMap from '../../../packages/js-utils/src/isMap'

const isMapDemo = () => {
  action('isMap 演示')({
    'new Map()': isMap(new Map()),
    'new WeakMap()': isMap(new WeakMap()),
    '{}': isMap({}),
    'null': isMap(null),
  })
}

export default isMapDemo
