import { Canvas } from '@justichentai/element-utils'

const rotateDemo = (canvas: Canvas) => {
  canvas.clear()
  canvas.addRect({ x: 0, y: 0, width: 500, height: 350, fillColor: '#ecf0f1' })

  // 原始（0度）
  canvas.addRect({ x: 50, y: 100, width: 60, height: 40, fillColor: '#3498db' })

  // 旋转 30 度
  canvas.save()
  canvas.translate({ x: 180, y: 120 })
  canvas.rotate({ angle: Canvas.degToRad(30) })
  canvas.addRect({ x: -30, y: -20, width: 60, height: 40, fillColor: '#e74c3c' })
  canvas.restore()

  // 旋转 45 度
  canvas.save()
  canvas.translate({ x: 300, y: 120 })
  canvas.rotate({ angle: Canvas.degToRad(45) })
  canvas.addRect({ x: -30, y: -20, width: 60, height: 40, fillColor: '#2ecc71' })
  canvas.restore()

  // 旋转 90 度
  canvas.save()
  canvas.translate({ x: 180, y: 230 })
  canvas.rotate({ angle: Canvas.degToRad(90) })
  canvas.addRect({ x: -30, y: -20, width: 60, height: 40, fillColor: '#9b59b6' })
  canvas.restore()

  canvas.addText({
    text: '0°       30°      45°      90°',
    x: 40,
    y: 270,
    width: 350,
    lineHeight: 20,
    font: 'Arial',
    fontSize: 14,
    fontWeight: 400,
    color: '#333',
  })
}

export default rotateDemo
