import { action } from 'storybook/actions'
import loadImage from '../../../packages/element-utils/src/loadImage'

const errorDemo = async () => {
  const [img, err] = await loadImage('https://invalid-url.png')

  if (err) {
    action('加载图片失败')({ success: false, error: err.message })
    return
  }

  action('加载图片失败')({
    success: true,
    width: img?.width,
    height: img?.height,
  })
}

export default errorDemo
