import { Canvas } from '@justichentai/element-utils'
import demoImg from '../../.assets/demo.png'

const addClipImageDemo = async (canvas: Canvas) => {
  canvas.clear()
  canvas.addRect({ x: 0, y: 0, width: 500, height: 350, fillColor: '#f5f5f5' })

  // 圆形裁剪
  await canvas.addClipImage({
    url: demoImg,
    x: 30,
    y: 60,
    width: 80,
    height: 80,
    clipType: 'circle',
  })

  // 圆角矩形裁剪
  await canvas.addClipImage({
    url: demoImg,
    x: 140,
    y: 60,
    width: 100,
    height: 120,
    clipType: 'roundRect',
    radius: 15,
  })

  // 四角独立圆角裁剪
  await canvas.addClipImage({
    url: demoImg,
    x: 270,
    y: 60,
    width: 100,
    height: 120,
    clipType: 'roundRect',
    radius: [20, 5, 20, 5],
  })

  // 添加说明文字
  canvas.addText({
    text: '圆形裁剪',
    x: 30,
    y: 200,
    width: 100,
    fontSize: 12,
    fontWeight: 400,
    font: 'Arial',
    lineHeight: 16,
    color: '#666',
  })
  canvas.addText({
    text: '圆角裁剪',
    x: 150,
    y: 200,
    width: 100,
    fontSize: 12,
    fontWeight: 400,
    font: 'Arial',
    lineHeight: 16,
    color: '#666',
  })
  canvas.addText({
    text: '独立圆角',
    x: 280,
    y: 200,
    width: 100,
    fontSize: 12,
    fontWeight: 400,
    font: 'Arial',
    lineHeight: 16,
    color: '#666',
  })
}

export default addClipImageDemo
