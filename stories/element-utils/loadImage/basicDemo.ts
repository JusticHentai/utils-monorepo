import { action } from 'storybook/actions'
import loadImage from '../../../packages/element-utils/src/loadImage'

const basicDemo = async () => {
  const [img, err] = await loadImage('https://via.placeholder.com/150')

  if (err) {
    action('加载图片成功')({ success: false, error: err.message })
    return
  }

  action('加载图片成功')({
    success: true,
    width: img?.width,
    height: img?.height,
  })
}

export default basicDemo
