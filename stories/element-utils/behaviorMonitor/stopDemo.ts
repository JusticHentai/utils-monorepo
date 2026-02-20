import { action } from 'storybook/actions'
import BehaviorMonitor from '../../../packages/element-utils/src/BehaviorMonitor'

const stopDemo = () => {
  const monitor = new BehaviorMonitor()

  action('运行状态（启动前）')(monitor.isRunning())

  const stop = monitor.observe((behavior) => {
    action('行为捕获')(behavior)
  })

  action('运行状态（启动后）')(monitor.isRunning())

  // 调用 stop 停止监听
  stop()

  action('运行状态（停止后）')(monitor.isRunning())
  action('行为记录')(monitor.getBehaviors())
}

export default stopDemo
