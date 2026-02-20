import { action } from 'storybook/actions'
import defer from '../../../packages/js-utils/src/defer'

const cancelDemo = () => {
  // defer 返回 timerId，可以用 clearTimeout 取消
  const timerId = defer(() => {
    action('defer - 不应该看到这条')('已被取消')
  })
  clearTimeout(timerId)
  action('defer - 已取消')('调用 clearTimeout(timerId) 取消了延迟执行')
}

export default cancelDemo
