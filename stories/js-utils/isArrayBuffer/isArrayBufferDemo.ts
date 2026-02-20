import { action } from 'storybook/actions'
import isArrayBuffer from '../../../packages/js-utils/src/isArrayBuffer'

const isArrayBufferDemo = () => {
  action('isArrayBuffer 演示')({
    'new ArrayBuffer(2)': isArrayBuffer(new ArrayBuffer(2)),
    '[]': isArrayBuffer([]),
    '{}': isArrayBuffer({}),
    'null': isArrayBuffer(null),
  })
}

export default isArrayBufferDemo
