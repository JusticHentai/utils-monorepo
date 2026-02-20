import { action } from 'storybook/actions'
import BehaviorMonitor from '../../../packages/element-utils/src/BehaviorMonitor'

const behaviorDemo = () => {
  const monitor = new BehaviorMonitor({
    click: true,
    scroll: true,
    input: true,
    routeChange: true,
    maxBehaviors: 50,
  })

  const stop = monitor.observe((behavior) => {
    action(`行为 - ${behavior.type}`)({
      pageUrl: behavior.pageUrl.slice(0, 80),
      target: behavior.target
        ? `<${behavior.target.tagName}> ${behavior.target.innerText?.slice(0, 30) || ''}`
        : undefined,
      data: behavior.data,
      timestamp: new Date(behavior.timestamp).toLocaleTimeString(),
    })
  })

  action('行为监控')('已启动（点击/滚动/输入/路由/可见性），请在页面上进行操作')

  // 记录自定义行为
  const customBehavior = monitor.trackCustom('demo_started', {
    source: 'storybook',
    version: '1.0',
  })
  action('自定义行为')(customBehavior)

  // 3秒后获取行为记录
  setTimeout(() => {
    const behaviors = monitor.getBehaviors()
    action('行为记录汇总')({
      total: behaviors.length,
      types: behaviors.map((b) => b.type),
    })
  }, 3000)

  // 5秒后停止
  setTimeout(() => {
    stop()
    action('行为监控')('已停止')
  }, 5000)
}

export default behaviorDemo
