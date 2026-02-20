import { action } from 'storybook/actions'
import createPromiseController from '../../../packages/js-utils/src/createPromiseController'

const imageLoadDemo = async () => {
  action('开始加载图片')()

  const loadImage = (url: string) => {
    const controller = createPromiseController<HTMLImageElement>()
    const img = new Image()

    img.onload = () => {
      action('图片加载成功')()
      controller.resolve(img)
    }
    img.onerror = () => {
      action('图片加载失败')()
      controller.reject(new Error('图片加载失败'))
    }
    img.src = url

    return controller.promise
  }

  try {
    // 使用一个公开的测试图片
    const img = await loadImage('https://picsum.photos/200/300')
    action(`图片加载完成，尺寸: ${img.width}x${img.height}`)()
  } catch (error) {
    action(`加载失败: ${error}`)()
  }
}

export default imageLoadDemo
