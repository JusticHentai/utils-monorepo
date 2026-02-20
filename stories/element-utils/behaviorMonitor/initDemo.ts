import { action } from 'storybook/actions'
import BehaviorMonitor from '../../../packages/element-utils/src/BehaviorMonitor'

const initDemo = () => {
  const monitor = new BehaviorMonitor()

  const stop = monitor.observe((behavior) => {
    action('行为捕获')({
      type: behavior.type,
      timestamp: behavior.timestamp,
      pageUrl: behavior.pageUrl,
      data: behavior.data,
    })
  })

  action('开始监听')('已启动全部行为监控（点击/滚动/输入/路由/可见性）')

  // 5 秒后自动停止
  setTimeout(() => {
    stop()
    action('自动停止')(`共记录 ${monitor.getBehaviors().length} 条行为`)
  }, 5000)
}

export default initDemo
