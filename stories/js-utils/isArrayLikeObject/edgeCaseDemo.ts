import { action } from 'storybook/actions'
import isArrayLikeObject from '../../../packages/js-utils/src/isArrayLikeObject'

const edgeCaseDemo = () => {
  const results = {
    '[]': isArrayLikeObject([]),
    '{length:0}': isArrayLikeObject({ length: 0 }),
    'string(非对象)': isArrayLikeObject('abc'),
    '函数': isArrayLikeObject(() => {}),
    'null': isArrayLikeObject(null),
  }

  action('isArrayLikeObject - 边界情况')(results)
}

export default edgeCaseDemo
