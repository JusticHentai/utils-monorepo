import { action } from 'storybook/actions'
import ErrorMonitor from '../../../packages/element-utils/src/ErrorMonitor'

const initDemo = () => {
  const monitor = new ErrorMonitor()

  const stop = monitor.observe((error) => {
    action('捕获错误')({
      type: error.type,
      message: error.message,
      timestamp: error.timestamp,
    })
  })

  action('开始监听')('已启动 JS / Resource / Promise 错误监控')

  // 5秒后停止监控
  setTimeout(() => {
    stop()
    action('监控状态')('已停止')
  }, 5000)
}

export default initDemo
