import { action } from 'storybook/actions'
import isTypedArray from '../../../packages/js-utils/src/isTypedArray'

const isTypedArrayDemo = () => {
  action('isTypedArray 演示')({
    'new Uint8Array()': isTypedArray(new Uint8Array()),
    'new Float32Array()': isTypedArray(new Float32Array()),
    'new Int16Array()': isTypedArray(new Int16Array()),
    '[]': isTypedArray([]),
    '{}': isTypedArray({}),
  })
}

export default isTypedArrayDemo
