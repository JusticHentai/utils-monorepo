import { Canvas } from '@justichentai/element-utils'

const clearDemo = (canvas: Canvas) => {
  // 先绘制一些内容
  canvas.addRect({ x: 0, y: 0, width: 500, height: 350, fillColor: '#3498db' })
  canvas.addCircle({ x: 200, y: 150, radius: 80, fillColor: '#e74c3c' })

  // 1秒后清空
  setTimeout(() => {
    canvas.clear()
    canvas.addText({
      text: '画布已清空',
      x: 130,
      y: 140,
      width: 200,
      lineHeight: 30,
      font: 'Arial',
      fontSize: 20,
      fontWeight: 700,
      color: '#333',
    })
  }, 1000)
}

export default clearDemo
