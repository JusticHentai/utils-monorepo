import { action } from 'storybook/actions'
import ErrorMonitor from '../../../packages/element-utils/src/ErrorMonitor'
import { ERROR_TYPE } from '../../../packages/element-utils/src/ErrorMonitor/interface'

const errorFilterDemo = () => {
  const monitor = new ErrorMonitor({
    consoleError: true,
    errorFilter: (error) => {
      if (error.type === ERROR_TYPE.CONSOLE && error.message.includes('忽略')) {
        action('被过滤')('该 console.error 被 errorFilter 拦截')
        return false
      }
      return true
    },
  })

  const stop = monitor.observe((error) => {
    action('通过过滤的错误')(error)
  })

  console.error('这条会被忽略')
  console.error('这条会通过过滤器')

  stop()
  action('演示完成')('errorFilter 过滤了包含"忽略"的错误')
}

export default errorFilterDemo
