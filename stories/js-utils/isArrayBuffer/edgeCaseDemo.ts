import { action } from 'storybook/actions'
import isArrayBuffer from '../../../packages/js-utils/src/isArrayBuffer'

const edgeCaseDemo = () => {
  const results = {
    'new ArrayBuffer(2)': isArrayBuffer(new ArrayBuffer(2)),
    '普通对象': isArrayBuffer({}),
    'null': isArrayBuffer(null),
    '[]': isArrayBuffer([]),
  }

  action('isArrayBuffer - 边界情况')(results)
}

export default edgeCaseDemo
