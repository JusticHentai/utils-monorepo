import Canvas from '../../../packages/element-utils/src/Canvas'

const addConicGradientDemo = (canvas: Canvas) => {
  canvas.clear()

  // 彩虹锥形渐变
  canvas.addConicGradient({
    startAngle: 0,
    x: 100,
    y: 100,
    colorStops: [
      { offset: 0, color: '#ff0000' },
      { offset: 0.17, color: '#ff8000' },
      { offset: 0.33, color: '#ffff00' },
      { offset: 0.5, color: '#00ff00' },
      { offset: 0.67, color: '#0080ff' },
      { offset: 0.83, color: '#8000ff' },
      { offset: 1, color: '#ff0000' },
    ],
    fillX: 20,
    fillY: 20,
    fillWidth: 160,
    fillHeight: 160,
  })

  // 饼图效果
  canvas.addConicGradient({
    startAngle: -Math.PI / 2,
    x: 300,
    y: 100,
    colorStops: [
      { offset: 0, color: '#3498db' },
      { offset: 0.3, color: '#3498db' },
      { offset: 0.3, color: '#e74c3c' },
      { offset: 0.55, color: '#e74c3c' },
      { offset: 0.55, color: '#2ecc71' },
      { offset: 0.8, color: '#2ecc71' },
      { offset: 0.8, color: '#f1c40f' },
      { offset: 1, color: '#f1c40f' },
    ],
    fillX: 220,
    fillY: 20,
    fillWidth: 160,
    fillHeight: 160,
  })

  // 添加遮罩使其成为圆形
  canvas.save()
  canvas.clipCircle({ x: 300, y: 100, radius: 70 })
  canvas.addConicGradient({
    startAngle: -Math.PI / 2,
    x: 300,
    y: 100,
    colorStops: [
      { offset: 0, color: '#3498db' },
      { offset: 0.3, color: '#3498db' },
      { offset: 0.3, color: '#e74c3c' },
      { offset: 0.55, color: '#e74c3c' },
      { offset: 0.55, color: '#2ecc71' },
      { offset: 0.8, color: '#2ecc71' },
      { offset: 0.8, color: '#f1c40f' },
      { offset: 1, color: '#f1c40f' },
    ],
    fillX: 220,
    fillY: 20,
    fillWidth: 160,
    fillHeight: 160,
  })
  canvas.restore()

  canvas.fillText({ text: '彩虹渐变', x: 60, y: 200, fontSize: 12, color: '#666' })
  canvas.fillText({ text: '饼图效果', x: 260, y: 200, fontSize: 12, color: '#666' })
}

export default addConicGradientDemo
