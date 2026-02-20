import { Canvas } from '@justichentai/element-utils'

const translateDemo = (canvas: Canvas) => {
  canvas.clear()
  canvas.addRect({ x: 0, y: 0, width: 500, height: 350, fillColor: '#ecf0f1' })

  // 原始位置
  canvas.addRect({ x: 20, y: 20, width: 60, height: 40, fillColor: '#3498db' })
  canvas.addText({
    text: '原始',
    x: 30,
    y: 75,
    width: 50,
    lineHeight: 16,
    font: 'Arial',
    fontSize: 12,
    fontWeight: 400,
    color: '#333',
  })

  // 平移后
  canvas.save()
  canvas.translate({ x: 100, y: 50 })
  canvas.addRect({ x: 20, y: 20, width: 60, height: 40, fillColor: '#e74c3c' })
  canvas.addText({
    text: '平移(100,50)',
    x: 10,
    y: 75,
    width: 80,
    lineHeight: 16,
    font: 'Arial',
    fontSize: 12,
    fontWeight: 400,
    color: '#333',
  })
  canvas.restore()

  // 多次平移
  canvas.save()
  canvas.translate({ x: 250, y: 100 })
  canvas.addRect({ x: 20, y: 20, width: 60, height: 40, fillColor: '#2ecc71' })
  canvas.addText({
    text: '平移(250,100)',
    x: 5,
    y: 75,
    width: 90,
    lineHeight: 16,
    font: 'Arial',
    fontSize: 12,
    fontWeight: 400,
    color: '#333',
  })
  canvas.restore()
}

export default translateDemo
