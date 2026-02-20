import { action } from 'storybook/actions'
import isArrayLikeObject from '../../../packages/js-utils/src/isArrayLikeObject'

const isArrayLikeObjectDemo = () => {
  action('isArrayLikeObject 演示')({
    '数组 [1, 2, 3]': isArrayLikeObject([1, 2, 3]),
    '字符串 "abc"（不是对象）': isArrayLikeObject('abc'),
    '{ length: 3 }': isArrayLikeObject({ length: 3 }),
    'null': isArrayLikeObject(null),
  })
}

export default isArrayLikeObjectDemo
