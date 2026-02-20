import { Canvas } from '@justichentai/element-utils'

const addArcDemo = (canvas: Canvas) => {
  canvas.clear()
  canvas.addRect({ x: 0, y: 0, width: 500, height: 350, fillColor: '#f5f5f5' })

  // 弧线（描边）
  canvas.addArc({
    x: 80,
    y: 100,
    radius: 50,
    startAngle: 0,
    endAngle: Math.PI,
    strokeColor: '#667eea',
    lineWidth: 3,
  })

  // 扇形（填充）
  canvas.addArc({
    x: 200,
    y: 100,
    radius: 50,
    startAngle: 0,
    endAngle: Math.PI * 1.5,
    fillColor: '#f093fb',
    closePath: true,
  })

  // 扇形（填充+描边）
  canvas.addArc({
    x: 320,
    y: 100,
    radius: 50,
    startAngle: -Math.PI / 2,
    endAngle: Math.PI / 4,
    fillColor: '#4facfe',
    strokeColor: '#00f2fe',
    lineWidth: 2,
    closePath: true,
  })

  // 进度条效果
  canvas.addArc({
    x: 200,
    y: 230,
    radius: 40,
    startAngle: -Math.PI / 2,
    endAngle: Math.PI,
    strokeColor: '#e0e0e0',
    lineWidth: 8,
  })
  canvas.addArc({
    x: 200,
    y: 230,
    radius: 40,
    startAngle: -Math.PI / 2,
    endAngle: Math.PI * 0.25,
    strokeColor: '#667eea',
    lineWidth: 8,
  })
}

export default addArcDemo
