import { Canvas } from '@justichentai/element-utils'

const addQuadraticDemo = (canvas: Canvas) => {
  canvas.clear()
  canvas.addRect({ x: 0, y: 0, width: 500, height: 350, fillColor: '#f5f5f5' })

  // 基础二次曲线
  canvas.addQuadratic({
    x1: 50,
    y1: 200,
    cpx: 150,
    cpy: 50,
    x2: 250,
    y2: 200,
    color: '#667eea',
    lineWidth: 3,
  })

  // 波浪效果
  canvas.addQuadratic({
    x1: 50,
    y1: 250,
    cpx: 100,
    cpy: 220,
    x2: 150,
    y2: 250,
    color: '#4facfe',
    lineWidth: 2,
  })
  canvas.addQuadratic({
    x1: 150,
    y1: 250,
    cpx: 200,
    cpy: 280,
    x2: 250,
    y2: 250,
    color: '#4facfe',
    lineWidth: 2,
  })
  canvas.addQuadratic({
    x1: 250,
    y1: 250,
    cpx: 300,
    cpy: 220,
    x2: 350,
    y2: 250,
    color: '#4facfe',
    lineWidth: 2,
  })

  // 绘制控制点辅助（帮助理解）
  canvas.addCircle({ x: 50, y: 200, radius: 4, fillColor: '#667eea' })
  canvas.addCircle({ x: 150, y: 50, radius: 4, fillColor: '#aaa' })
  canvas.addCircle({ x: 250, y: 200, radius: 4, fillColor: '#667eea' })

  canvas.addLine({ x1: 50, y1: 200, x2: 150, y2: 50, color: '#ddd', lineWidth: 1 })
  canvas.addLine({ x1: 250, y1: 200, x2: 150, y2: 50, color: '#ddd', lineWidth: 1 })
}

export default addQuadraticDemo
