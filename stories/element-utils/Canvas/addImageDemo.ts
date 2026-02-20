import { Canvas } from '@justichentai/element-utils'
import demoImg from '../../.assets/demo.png'

const addImageDemo = async (canvas: Canvas) => {
  canvas.clear()
  canvas.addRect({ x: 0, y: 0, width: 500, height: 350, fillColor: '#f5f5f5' })

  // 整图绘制
  await canvas.addImage({ url: demoImg, x: 20, y: 20, width: 100, height: 100 })

  // 裁剪绘制：从源图 (50,50) 裁剪 200x200 区域
  await canvas.addImage({
    url: demoImg,
    x: 140,
    y: 20,
    width: 100,
    height: 100,
    sx: 50,
    sy: 50,
    sWidth: 200,
    sHeight: 200,
  })

  // 裁剪绘制：从源图左上角裁剪 150x150 区域
  await canvas.addImage({
    url: demoImg,
    x: 260,
    y: 20,
    width: 100,
    height: 100,
    sx: 0,
    sy: 0,
    sWidth: 150,
    sHeight: 150,
  })

  // 添加说明文字
  canvas.fillText({ text: '整图绘制', x: 35, y: 135, fontSize: 12, color: '#666' })
  canvas.fillText({ text: '裁剪中心', x: 155, y: 135, fontSize: 12, color: '#666' })
  canvas.fillText({ text: '裁剪左上', x: 275, y: 135, fontSize: 12, color: '#666' })
}

export default addImageDemo
