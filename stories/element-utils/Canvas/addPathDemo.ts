import { Canvas } from '@justichentai/element-utils'

const addPathDemo = (canvas: Canvas) => {
  canvas.clear()

  // 绘制三角形
  canvas.addPath({
    commands: [
      { type: 'moveTo', x: 50, y: 50 },
      { type: 'lineTo', x: 150, y: 50 },
      { type: 'lineTo', x: 100, y: 130 },
      { type: 'closePath' },
    ],
    fillColor: '#3498db',
    strokeColor: '#2980b9',
    lineWidth: 2,
  })

  // 绘制箭头
  canvas.addPath({
    commands: [
      { type: 'moveTo', x: 200, y: 90 },
      { type: 'lineTo', x: 280, y: 90 },
      { type: 'lineTo', x: 260, y: 70 },
      { type: 'moveTo', x: 280, y: 90 },
      { type: 'lineTo', x: 260, y: 110 },
    ],
    strokeColor: '#e74c3c',
    lineWidth: 3,
  })

  // 绘制星形
  canvas.addPath({
    commands: [
      { type: 'moveTo', x: 350, y: 50 },
      { type: 'lineTo', x: 360, y: 80 },
      { type: 'lineTo', x: 390, y: 80 },
      { type: 'lineTo', x: 365, y: 100 },
      { type: 'lineTo', x: 375, y: 130 },
      { type: 'lineTo', x: 350, y: 110 },
      { type: 'lineTo', x: 325, y: 130 },
      { type: 'lineTo', x: 335, y: 100 },
      { type: 'lineTo', x: 310, y: 80 },
      { type: 'lineTo', x: 340, y: 80 },
      { type: 'closePath' },
    ],
    fillColor: '#f1c40f',
    strokeColor: '#f39c12',
    lineWidth: 2,
  })
}

export default addPathDemo
