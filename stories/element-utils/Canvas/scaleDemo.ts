import { Canvas } from '@justichentai/element-utils'

const scaleDemo = (canvas: Canvas) => {
  canvas.clear()
  canvas.addRect({ x: 0, y: 0, width: 500, height: 350, fillColor: '#ecf0f1' })

  // 原始 1x
  canvas.save()
  canvas.translate({ x: 60, y: 80 })
  canvas.addRect({ x: -25, y: -20, width: 50, height: 40, fillColor: '#3498db' })
  canvas.restore()

  // 放大 1.5 倍
  canvas.save()
  canvas.translate({ x: 160, y: 80 })
  canvas.scale({ scaleX: 1.5, scaleY: 1.5 })
  canvas.addRect({ x: -25, y: -20, width: 50, height: 40, fillColor: '#e74c3c' })
  canvas.restore()

  // 缩小 0.5 倍
  canvas.save()
  canvas.translate({ x: 280, y: 80 })
  canvas.scale({ scaleX: 0.5, scaleY: 0.5 })
  canvas.addRect({ x: -25, y: -20, width: 50, height: 40, fillColor: '#2ecc71' })
  canvas.restore()

  // 水平拉伸 2x
  canvas.save()
  canvas.translate({ x: 100, y: 200 })
  canvas.scale({ scaleX: 2, scaleY: 1 })
  canvas.addRect({ x: -25, y: -20, width: 50, height: 40, fillColor: '#9b59b6' })
  canvas.restore()

  // 垂直拉伸 2x
  canvas.save()
  canvas.translate({ x: 280, y: 200 })
  canvas.scale({ scaleX: 1, scaleY: 2 })
  canvas.addRect({ x: -25, y: -20, width: 50, height: 40, fillColor: '#f39c12' })
  canvas.restore()

  canvas.addText({
    text: '1x      1.5x     0.5x     2x横    1x纵x2',
    x: 20,
    y: 270,
    width: 380,
    lineHeight: 20,
    font: 'Arial',
    fontSize: 12,
    fontWeight: 400,
    color: '#333',
  })
}

export default scaleDemo
