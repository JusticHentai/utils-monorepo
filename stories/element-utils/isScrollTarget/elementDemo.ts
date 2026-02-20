import { action } from 'storybook/actions'
import isScrollTarget from '../../../packages/element-utils/src/isScrollTarget'

const elementDemo = () => {
  const element = document.body
  const result = isScrollTarget(element)

  action('isScrollTarget(Element)')(result)
  action('Element 是有效的滚动目标')(`返回 ${result}`)
}

export default elementDemo
