import { action } from 'storybook/actions'
import supportMutationObserver from '../../../packages/element-utils/src/supportMutationObserver'

const basicDemo = () => {
  const result = supportMutationObserver()

  action('supportMutationObserver 检测结果')({
    supported: result,
    message: result
      ? 'MutationObserver 可用，可以监听 DOM 变化'
      : 'MutationObserver 不可用',
  })
}

export default basicDemo
