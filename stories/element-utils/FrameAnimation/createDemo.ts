import { action } from 'storybook/actions'
import FrameAnimation from '../../../packages/element-utils/src/FrameAnimation'
import frameAnimationDemo from '../../.assets/frameAnimationDemo.png'

const createDemo = async () => {
  const animation = new FrameAnimation({
    imageUrl: frameAnimationDemo,
    frameCount: 20,
    duration: 2000,
    rowCount: 4,
  })

  // 离屏渲染，使用 ImageBitmap 裁剪帧
  await animation.preRender()

  action('创建 FrameAnimation 实例')({
    message: '已创建 FrameAnimation 实例',
    methods: ['preRender', 'createInstance', 'loadImage'],
    frameList: animation.frameList.map((f) => ({
      type: f.bitmap.constructor.name,
      width: f.bitmap.width,
      height: f.bitmap.height,
    })),
  })

  return { animation }
}

export default createDemo
