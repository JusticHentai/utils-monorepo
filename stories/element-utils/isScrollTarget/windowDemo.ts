import { action } from 'storybook/actions'
import isScrollTarget from '../../../packages/element-utils/src/isScrollTarget'

const windowDemo = () => {
  const result = isScrollTarget(window)

  action('isScrollTarget(window)')(result)
  action('Window 是有效的滚动目标')(`返回 ${result}`)
}

export default windowDemo
