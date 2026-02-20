import { action } from 'storybook/actions'
import observeVisibility from '../../../packages/element-utils/src/behaviorMonitor/core/observeVisibility'

const observeVisibilityDemo = () => {
  const stop = observeVisibility((behavior) => {
    action('可见性变化')({
      type: behavior.type,
      data: behavior.data,
    })
  })

  action('可见性监控已启动')(
    '请切换浏览器标签页，将捕获 visibilitychange 事件'
  )

  setTimeout(() => {
    stop()
    action('可见性监控已停止')('30 秒后自动停止')
  }, 30000)
}

export default observeVisibilityDemo
