import { action } from 'storybook/actions'
import isBuffer from '../../../packages/js-utils/src/isBuffer'

const edgeCaseDemo = () => {
  const results = {
    'Uint8Array': isBuffer(new Uint8Array(2)),
    '[]': isBuffer([]),
    '普通对象': isBuffer({}),
    'null': isBuffer(null),
  }

  action('isBuffer - 边界情况')(results)
}

export default edgeCaseDemo
