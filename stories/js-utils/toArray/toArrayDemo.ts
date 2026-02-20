import { action } from 'storybook/actions'
import toArray from '../../../packages/js-utils/src/toArray'

const toArrayDemo = () => {
  action('toArray 演示')({
    '字符串 "abc"': toArray('abc'),
    '{ a: 1, b: 2 }': toArray({ a: 1, b: 2 }),
    'null': toArray(null),
    '数字 1': toArray(1),
  })
}

export default toArrayDemo
