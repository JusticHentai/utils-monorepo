import { action } from 'storybook/actions'
import isBuffer from '../../../packages/js-utils/src/isBuffer'

const isBufferDemo = () => {
  action('isBuffer 演示')({
    'new Uint8Array(2)': isBuffer(new Uint8Array(2)),
    '[]': isBuffer([]),
    '{}': isBuffer({}),
    说明: '在浏览器环境中 Buffer 不存在，需要 Node.js 环境',
  })
}

export default isBufferDemo
