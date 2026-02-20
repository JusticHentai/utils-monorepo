import { action } from 'storybook/actions'
import delay from '../../../packages/js-utils/src/delay'

const delayDemo = () => {
  action('delay - 立即输出')('开始计时')
  delay(
    (msg: string) => {
      action('delay - 1秒后执行')(msg)
    },
    1000,
    '延迟1秒的消息',
  )
}

export default delayDemo
