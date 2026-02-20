import { action } from 'storybook/actions'
import isAppleDevice from '../../../packages/element-utils/src/isAppleDevice'

const basicDemo = () => {
  const result = isAppleDevice()

  action('isAppleDevice 检测结果')({
    isAppleDevice: result,
    platform: navigator.platform,
    userAgent: navigator.userAgent,
  })
}

export default basicDemo
