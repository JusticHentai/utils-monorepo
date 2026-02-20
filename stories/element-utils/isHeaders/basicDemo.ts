import { action } from 'storybook/actions'
import isHeaders from '../../../packages/element-utils/src/isHeaders'

const basicDemo = () => {
  const headers = new Headers({
    'Content-Type': 'application/json',
    Authorization: 'Bearer token',
  })

  const result = isHeaders(headers)

  action('isHeaders 检测 Headers 实例')({
    isHeaders: result,
  })
}

export default basicDemo
