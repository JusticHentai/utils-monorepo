import { action } from 'storybook/actions'
import isArrayLike from '../../../packages/js-utils/src/isArrayLike'

const isArrayLikeDemo = () => {
  action('isArrayLike 演示')({
    '数组 [1, 2, 3]': isArrayLike([1, 2, 3]),
    '字符串 "abc"': isArrayLike('abc'),
    '普通对象 {}': isArrayLike({}),
    'null': isArrayLike(null),
    'number 123': isArrayLike(123),
  })
}

export default isArrayLikeDemo
