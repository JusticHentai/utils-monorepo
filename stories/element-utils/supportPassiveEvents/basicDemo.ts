import { action } from 'storybook/actions'
import supportPassiveEvents from '../../../packages/element-utils/src/supportPassiveEvents'

const basicDemo = () => {
  const result = supportPassiveEvents()

  action('supportPassiveEvents 检测结果')({
    supported: result,
    message: result
      ? 'Passive Events 可用，可以提升滚动性能'
      : 'Passive Events 不可用，使用传统事件监听',
    usage: result
      ? "element.addEventListener('touchstart', handler, { passive: true })"
      : "element.addEventListener('touchstart', handler, false)",
  })
}

export default basicDemo
