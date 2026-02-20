import { action } from 'storybook/actions'
import observeScroll from '../../../packages/element-utils/src/BehaviorMonitor/core/observeScroll'

const observeScrollDemo = () => {
  // 节流 300ms，采样率 100%
  const stop = observeScroll(
    (behavior) => {
      action('滚动行为')({
        type: behavior.type,
        data: behavior.data,
      })
    },
    {
      throttleMs: 300,
      sampleRate: 1,
    }
  )

  action('滚动监控已启动')(
    '请滚动页面，将捕获滚动位置和视口信息（节流 300ms）'
  )

  setTimeout(() => {
    stop()
    action('滚动监控已停止')('5 秒后自动停止')
  }, 5000)
}

export default observeScrollDemo
