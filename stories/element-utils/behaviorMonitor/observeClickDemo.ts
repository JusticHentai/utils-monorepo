import { action } from 'storybook/actions'
import observeClick from '../../../packages/element-utils/src/behaviorMonitor/core/observeClick'

const observeClickDemo = () => {
  // 在捕获阶段监听点击，采样率 100%
  const stop = observeClick(
    (behavior) => {
      action('点击行为')({
        type: behavior.type,
        target: behavior.target,
        data: behavior.data,
      })
    },
    {
      capture: true,
      sampleRate: 1,
    }
  )

  action('点击监控已启动')('请点击页面任意元素，将捕获坐标和目标元素信息')

  setTimeout(() => {
    stop()
    action('点击监控已停止')('5 秒后自动停止')
  }, 5000)
}

export default observeClickDemo
