import { action } from 'storybook/actions'
import getScrollPosition from '../../../packages/element-utils/src/getScrollPosition'

const windowScrollDemo = () => {
  const position = getScrollPosition(window)

  action('getScrollPosition(window)')(position)
  action('Window 滚动位置')(`x: ${position.x}, y: ${position.y}`)
}

export default windowScrollDemo
