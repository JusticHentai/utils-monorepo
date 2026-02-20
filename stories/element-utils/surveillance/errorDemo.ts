import { action } from 'storybook/actions'
import ErrorMonitor from '../../../packages/element-utils/src/ErrorMonitor'

const errorDemo = () => {
  // 使用 ErrorMonitor 类统一监控所有错误
  const monitor = new ErrorMonitor({
    jsError: true,
    resourceError: true,
    promiseError: true,
    consoleError: false,
    errorFilter: (error) => {
      // 过滤掉脚本跨域错误和 ResizeObserver 错误
      if (/Script error/.test(error.message)) return false
      if (/ResizeObserver loop/.test(error.message)) return false
      return true
    },
  })

  const stop = monitor.observe((error) => {
    action(`错误 - ${error.type}`)({
      message: error.message,
      stack: error.stack?.slice(0, 200),
      timestamp: new Date(error.timestamp).toLocaleString(),
    })
  })

  action('错误监控')('已启动所有错误监控（JS / Resource / Promise）')

  // 触发测试错误
  setTimeout(() => {
    action('触发测试')('即将触发 Promise 错误')
    Promise.reject(new Error('测试 Promise 错误'))
  }, 1000)

  // 5秒后停止监控
  setTimeout(() => {
    stop()
    action('错误监控')('已停止所有错误监控')
  }, 5000)
}

export default errorDemo
