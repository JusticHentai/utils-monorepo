import { Canvas } from '@justichentai/element-utils'

const addBezierDemo = (canvas: Canvas) => {
  canvas.clear()
  canvas.addRect({ x: 0, y: 0, width: 500, height: 350, fillColor: '#f5f5f5' })

  // 基础贝塞尔曲线
  canvas.addBezier({
    x1: 50,
    y1: 150,
    cp1x: 100,
    cp1y: 50,
    cp2x: 200,
    cp2y: 250,
    x2: 250,
    y2: 150,
    color: '#667eea',
    lineWidth: 3,
  })

  // S 形曲线
  canvas.addBezier({
    x1: 280,
    y1: 80,
    cp1x: 350,
    cp1y: 80,
    cp2x: 280,
    cp2y: 220,
    x2: 350,
    y2: 220,
    color: '#f093fb',
    lineWidth: 3,
    lineCap: 'round',
  })

  // 绘制控制点辅助线（帮助理解）
  // 第一条曲线的控制点
  canvas.addCircle({ x: 50, y: 150, radius: 4, fillColor: '#667eea' })
  canvas.addCircle({ x: 100, y: 50, radius: 4, fillColor: '#aaa' })
  canvas.addCircle({ x: 200, y: 250, radius: 4, fillColor: '#aaa' })
  canvas.addCircle({ x: 250, y: 150, radius: 4, fillColor: '#667eea' })

  canvas.addLine({ x1: 50, y1: 150, x2: 100, y2: 50, color: '#ddd', lineWidth: 1 })
  canvas.addLine({ x1: 250, y1: 150, x2: 200, y2: 250, color: '#ddd', lineWidth: 1 })
}

export default addBezierDemo
