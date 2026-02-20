import { action } from 'storybook/actions'
import isMap from '../../../packages/js-utils/src/isMap'

const edgeCaseDemo = () => {
  const results = {
    'new Map()': isMap(new Map()),
    '普通对象': isMap({}),
    'new WeakMap()': isMap(new WeakMap()),
    'null': isMap(null),
  }

  action('isMap - 边界情况')(results)
}

export default edgeCaseDemo
