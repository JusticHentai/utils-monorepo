import { Canvas } from '@justichentai/element-utils'

const addEllipseDemo = (canvas: Canvas) => {
  canvas.clear()
  canvas.addRect({ x: 0, y: 0, width: 500, height: 350, fillColor: '#f5f5f5' })

  // 基础椭圆（填充）
  canvas.addEllipse({
    x: 80,
    y: 100,
    radiusX: 60,
    radiusY: 40,
    fillColor: '#667eea',
  })

  // 椭圆（描边）
  canvas.addEllipse({
    x: 200,
    y: 100,
    radiusX: 50,
    radiusY: 30,
    strokeColor: '#f093fb',
    lineWidth: 3,
  })

  // 旋转椭圆
  canvas.addEllipse({
    x: 320,
    y: 100,
    radiusX: 50,
    radiusY: 25,
    rotation: Math.PI / 4,
    fillColor: '#4facfe',
    strokeColor: '#00f2fe',
    lineWidth: 2,
  })

  // 组合效果
  canvas.addEllipse({
    x: 200,
    y: 220,
    radiusX: 80,
    radiusY: 50,
    fillColor: 'rgba(102, 126, 234, 0.3)',
    strokeColor: '#667eea',
    lineWidth: 2,
  })
  canvas.addEllipse({
    x: 200,
    y: 220,
    radiusX: 50,
    radiusY: 30,
    fillColor: 'rgba(240, 147, 251, 0.5)',
  })
}

export default addEllipseDemo
