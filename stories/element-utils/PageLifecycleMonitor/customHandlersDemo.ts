import { action } from 'storybook/actions'
import PageLifecycleMonitor from '../../../packages/element-utils/src/PageLifecycleMonitor'

const customHandlersDemo = () => {
  const monitor = new PageLifecycleMonitor({
    pageshow: (e) => {
      const event = e as PageTransitionEvent
      action('pageshow')({
        persisted: event?.persisted,
        fromBFCache: event?.persisted,
      })
    },
    pagehide: (e) => {
      const event = e as PageTransitionEvent
      action('pagehide')({
        persisted: event?.persisted,
      })
    },
    online: () => {
      action('网络状态')('已恢复连接')
    },
    offline: () => {
      action('网络状态')('已断开连接')
    },
    freeze: () => {
      action('freeze')('页面已冻结')
    },
    resume: () => {
      action('resume')('页面已恢复')
    },
  })

  const stop = monitor.observe()
  action('自定义处理器')('已启动 pageshow/pagehide/网络/冻结 监听')

  setTimeout(() => {
    stop()
    action('清理完成')('已停止监听')
  }, 15000)
}

export default customHandlersDemo
