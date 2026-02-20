import { action } from 'storybook/actions'
import supportRequestIdleCallback from '../../../packages/element-utils/src/supportRequestIdleCallback'

const basicDemo = () => {
  const result = supportRequestIdleCallback()

  action('supportRequestIdleCallback 检测结果')({
    supported: result,
    message: result
      ? 'requestIdleCallback 可用，可以在浏览器空闲时执行任务'
      : 'requestIdleCallback 不可用，需要使用 setTimeout 降级',
  })

  // 如果支持，演示使用
  if (result) {
    requestIdleCallback(
      (deadline) => {
        action('requestIdleCallback 执行')({
          timeRemaining: deadline.timeRemaining(),
          didTimeout: deadline.didTimeout,
        })
      },
      { timeout: 1000 }
    )
  }
}

export default basicDemo
