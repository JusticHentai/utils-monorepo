import { action } from 'storybook/actions'
import isScrollTarget from '../../../packages/element-utils/src/isScrollTarget'

const eventTargetDemo = () => {
  // 创建一个非 Window/Element 的 EventTarget
  const customTarget = new EventTarget()
  const result = isScrollTarget(customTarget)

  action('isScrollTarget(EventTarget)')(result)
  action('普通 EventTarget 不是有效的滚动目标')(`返回 ${result}`)
}

export default eventTargetDemo
