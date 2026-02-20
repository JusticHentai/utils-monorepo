import { action } from 'storybook/actions'
import supportPerformanceObserver from '../../../packages/element-utils/src/supportPerformanceObserver'

const basicDemo = () => {
  const result = supportPerformanceObserver()

  action('supportPerformanceObserver 检测结果')({
    supported: result,
    message: result
      ? 'PerformanceObserver 可用，可以监听性能指标'
      : 'PerformanceObserver 不可用',
  })
}

export default basicDemo
