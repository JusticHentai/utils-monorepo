import { action } from 'storybook/actions'
import isNative from '../../../packages/js-utils/src/isNative'

const isNativeDemo = () => {
  action('isNative 演示')({
    'Array.prototype.push': isNative(Array.prototype.push),
    'Object.keys': isNative(Object.keys),
    '箭头函数': isNative(() => {}),
    'null': isNative(null),
  })
}

export default isNativeDemo
