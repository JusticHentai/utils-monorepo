import { Canvas } from '@justichentai/element-utils'

const addLineDemo = (canvas: Canvas) => {
  canvas.clear()
  // 实线
  canvas.addLine({
    x1: 50,
    y1: 50,
    x2: 350,
    y2: 50,
    color: '#3498db',
    lineWidth: 2,
  })
  // 粗线（圆头）
  canvas.addLine({
    x1: 50,
    y1: 100,
    x2: 350,
    y2: 100,
    color: '#e74c3c',
    lineWidth: 5,
    lineCap: 'round',
  })
  // 虚线
  canvas.addLine({
    x1: 50,
    y1: 150,
    x2: 350,
    y2: 150,
    color: '#2ecc71',
    lineWidth: 2,
    lineDash: [10, 5],
  })
  // 点线
  canvas.addLine({
    x1: 50,
    y1: 200,
    x2: 350,
    y2: 200,
    color: '#9b59b6',
    lineWidth: 3,
    lineDash: [2, 8],
  })
  // 斜线
  canvas.addLine({
    x1: 50,
    y1: 250,
    x2: 350,
    y2: 220,
    color: '#f39c12',
    lineWidth: 2,
  })
}

export default addLineDemo
