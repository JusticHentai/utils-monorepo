import { action } from 'storybook/actions'
import getWindowSize from '../../../packages/element-utils/src/getWindowSize'

const basicDemo = () => {
  const size = getWindowSize()

  action('窗口尺寸')({
    width: size.width,
    height: size.height,
    description: `当前窗口宽度 ${size.width}px，高度 ${size.height}px`,
  })
}

export default basicDemo
