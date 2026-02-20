import { action } from 'storybook/actions'
import Canvas from '../../../packages/element-utils/src/Canvas'
import demoImg from '../../.assets/demo.png'

const imageDataDemo = async (canvas: Canvas) => {
  canvas.clear()

  // 绘制原始图片
  await canvas.addImage({ url: demoImg, x: 20, y: 20, width: 100, height: 100 })
  canvas.fillText({ text: '原图', x: 50, y: 130, fontSize: 12, color: '#666' })

  // 获取像素数据
  const imageData = canvas.getImageData({ x: 20, y: 20, width: 100, height: 100 })
  action('getImageData')(`获取 100x100 区域，共 ${imageData.data.length} 字节像素数据`)

  // 复制到另一个位置
  canvas.putImageData({ imageData, x: 140, y: 20 })
  canvas.fillText({ text: '复制', x: 170, y: 130, fontSize: 12, color: '#666' })

  // 反色效果
  const invertedData = canvas.getImageData({ x: 20, y: 20, width: 100, height: 100 })
  const data = invertedData.data
  for (let i = 0; i < data.length; i += 4) {
    data[i] = 255 - data[i]         // R
    data[i + 1] = 255 - data[i + 1] // G
    data[i + 2] = 255 - data[i + 2] // B
  }
  canvas.putImageData({ imageData: invertedData, x: 260, y: 20 })
  canvas.fillText({ text: '反色', x: 290, y: 130, fontSize: 12, color: '#666' })

  // 灰度效果
  const grayData = canvas.getImageData({ x: 140, y: 20, width: 100, height: 100 })
  const gData = grayData.data
  for (let i = 0; i < gData.length; i += 4) {
    const avg = (gData[i] + gData[i + 1] + gData[i + 2]) / 3
    gData[i] = avg
    gData[i + 1] = avg
    gData[i + 2] = avg
  }
  canvas.putImageData({ imageData: grayData, x: 380, y: 20 })
  canvas.fillText({ text: '灰度', x: 410, y: 130, fontSize: 12, color: '#666' })
}

export default imageDataDemo
