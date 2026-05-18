import { action } from 'storybook/actions'
import supportSendBeacon from '../../../packages/element-utils/src/supportSendBeacon'

const basicDemo = () => {
  action('sendBeacon 支持检测')({
    supported: supportSendBeacon(),
    usage: '页面隐藏或卸载附近选择 beacon 上报前的能力判断',
  })
}

export default basicDemo
