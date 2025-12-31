import FrameAnimation from '../../../packages/element-utils/src/FrameAnimation'

const basicDemo = () => {
  const animation = new FrameAnimation({
    imageUrl: 'https://example.com/sprite.png',
    frameCount: 24,
    duration: 1000,
    rowCount: 4,
  })

  return {
    message: '已创建 FrameAnimation 实例',
    methods: ['preRender', 'createInstance', 'loadImage'],
  }
}

export default basicDemo
