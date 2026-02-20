import { action } from 'storybook/actions'
import getScrollPosition from '../../../packages/element-utils/src/getScrollPosition'

const elementScrollDemo = () => {
  const container = document.getElementById('scroll-container') as HTMLElement
  const position = getScrollPosition(container)

  action('getScrollPosition(Element)')(position)
  action('Element 滚动位置')(`x: ${position.x}, y: ${position.y}`)
}

export default elementScrollDemo
