import { action } from 'storybook/actions'
import isTypedArray from '../../../packages/js-utils/src/isTypedArray'

const edgeCaseDemo = () => {
  const results = {
    'Uint8Array': isTypedArray(new Uint8Array()),
    'Float32Array': isTypedArray(new Float32Array()),
    '[]': isTypedArray([]),
    'null': isTypedArray(null),
  }

  action('isTypedArray - 边界情况')(results)
}

export default edgeCaseDemo
