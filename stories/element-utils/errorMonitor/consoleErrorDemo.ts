import { action } from 'storybook/actions'
import ErrorMonitor from '../../../packages/element-utils/src/ErrorMonitor'

const consoleErrorDemo = () => {
  const monitor = new ErrorMonitor({
    consoleError: true,
    jsError: false,
    resourceError: false,
    promiseError: false,
  })

  const stop = monitor.observe((error) => {
    action('捕获 console.error')(error)
  })

  console.error('模拟的 console.error 输出', { statusCode: 500 })

  stop()
  action('演示完成')('已捕获 console.error 并停止监听')
}

export default consoleErrorDemo
