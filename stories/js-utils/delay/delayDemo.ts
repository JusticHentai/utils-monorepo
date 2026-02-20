import { action } from 'storybook/actions'
import delay from '../../../packages/js-utils/src/delay'

const delayDemo = () => {
  delay((text) => {
    action('delay 演示')({ '延迟 1 秒后执行': text })
  }, 1000, '延迟执行的参数')
  action('delay 已触发')('等待 1 秒...')
}

export default delayDemo
