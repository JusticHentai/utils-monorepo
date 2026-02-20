import { action } from 'storybook/actions'
import supportResizeObserver from '../../../packages/element-utils/src/supportResizeObserver'

const basicDemo = () => {
  const result = supportResizeObserver()

  action('supportResizeObserver 检测结果')({
    supported: result,
    message: result
      ? 'ResizeObserver 可用，可以监听元素尺寸变化'
      : 'ResizeObserver 不可用，需要使用 polyfill',
  })
}

export default basicDemo
