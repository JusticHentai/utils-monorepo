import { action } from 'storybook/actions'
import observeInput from '../../../packages/element-utils/src/BehaviorMonitor/core/observeInput'

const observeInputDemo = () => {
  // 开启值记录，自定义敏感字段
  const stop = observeInput(
    (behavior) => {
      action('输入行为')({
        type: behavior.type,
        target: behavior.target,
        data: behavior.data,
      })
    },
    {
      recordValue: true,
      sensitiveFields: ['password', 'secret', 'token'],
      throttleMs: 300,
    }
  )

  action('输入监控已启动')(
    '请在输入框中输入内容，密码框和敏感字段的值不会被记录'
  )

  setTimeout(() => {
    stop()
    action('输入监控已停止')('10 秒后自动停止')
  }, 10000)
}

export default observeInputDemo
