import { action } from 'storybook/actions'
import isArray from '../../../packages/js-utils/src/isArray'

const arrayDemo = () => {
  // 数组返回 true
  action('isArray - 数组返回 true')({
    '[1, 2, 3]': isArray([1, 2, 3]),
    '[]': isArray([]),
  })

  // 非数组返回 false
  action('isArray - 非数组返回 false')({
    'true': isArray(true),
    'new Date': isArray(new Date()),
    'new Error': isArray(new Error()),
    '{ 0: 1, length: 1 }': isArray({ 0: 1, length: 1 }),
    '1': isArray(1),
    '/x/': isArray(/x/),
    '"a"': isArray('a'),
    'null': isArray(null),
    'undefined': isArray(undefined),
  })
}

export default arrayDemo
