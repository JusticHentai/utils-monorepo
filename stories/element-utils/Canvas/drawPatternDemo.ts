import { Canvas } from '@justichentai/element-utils'
import loadImage from '../../../packages/element-utils/src/loadImage'
import demoImg from '../../.assets/demo.png'

const drawPatternDemo = async (canvas: Canvas) => {
  canvas.clear()
  canvas.addRect({ x: 0, y: 0, width: 500, height: 350, fillColor: '#f5f5f5' })

  // 使用 demo 图片作为图案
  const [img] = await loadImage(demoImg)
  if (!img) return

  canvas.drawPattern({
    image: img,
    repetition: 'repeat',
    x: 20,
    y: 20,
    width: 300,
    height: 200,
  })
}

export default drawPatternDemo
