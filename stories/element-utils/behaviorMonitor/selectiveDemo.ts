import { action } from 'storybook/actions'
import BehaviorMonitor from '../../../packages/element-utils/src/behaviorMonitor'

const selectiveDemo = () => {
  // 只监控点击和输入，关闭滚动和路由
  const monitor = new BehaviorMonitor({
    click: true,
    input: true,
    scroll: false,
    routeChange: false,
    clickOptions: {
      capture: true,
      sampleRate: 1,
    },
    inputOptions: {
      recordValue: true,
      throttleMs: 300,
    },
  })

  const stop = monitor.observe((behavior) => {
    action('行为捕获')(behavior)
  })

  action('选择性监听')('仅监控点击和输入行为')

  setTimeout(() => {
    stop()
    action('自动停止')(`共记录 ${monitor.getBehaviors().length} 条行为`)
  }, 5000)
}

export default selectiveDemo
