import { Canvas } from '@justichentai/element-utils'
import demoImg from '../../.assets/demo.png'

const imageBitmapDemo = async (canvas: Canvas) => {
  canvas.clear()

  canvas.fillText({
    text: '加载 ImageBitmap...',
    x: 20,
    y: 20,
    fontSize: 14,
    color: '#666',
  })

  try {
    // 从 URL 加载 ImageBitmap
    const bitmap = await Canvas.loadImageBitmap(demoImg)

    canvas.clear()

    // 原始尺寸
    canvas.drawImageBitmap({
      bitmap,
      dx: 20,
      dy: 20,
    })
    canvas.fillText({ text: '原始尺寸', x: 20, y: 130, fontSize: 10, color: '#666' })

    // 指定尺寸
    canvas.drawImageBitmap({
      bitmap,
      dx: 150,
      dy: 20,
      dWidth: 80,
      dHeight: 80,
    })
    canvas.fillText({ text: '80x80', x: 170, y: 110, fontSize: 10, color: '#666' })

    // 使用 createImageBitmap 裁剪
    const croppedBitmap = await Canvas.createImageBitmap({
      source: bitmap,
      sx: 0,
      sy: 0,
      sw: bitmap.width / 2,
      sh: bitmap.height / 2,
    })

    canvas.drawImageBitmap({
      bitmap: croppedBitmap,
      dx: 260,
      dy: 20,
      dWidth: 100,
      dHeight: 100,
    })
    canvas.fillText({ text: '裁剪后', x: 280, y: 130, fontSize: 10, color: '#666' })

    // 释放资源
    bitmap.close()
    croppedBitmap.close()

    canvas.fillText({
      text: 'ImageBitmap 比 Image 更高效，适合频繁绑制',
      x: 20,
      y: 170,
      fontSize: 12,
      color: '#999',
    })
  } catch (error) {
    canvas.fillText({
      text: '加载失败: ' + String(error),
      x: 20,
      y: 50,
      fontSize: 12,
      color: '#e74c3c',
    })
  }
}

export default imageBitmapDemo
