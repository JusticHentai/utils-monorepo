import Canvas from '../../../packages/element-utils/src/Canvas'

const addLinearGradientDemo = (canvas: Canvas) => {
  const ctx = canvas.getContext()
  canvas.clear()

  // 水平渐变
  const gradient1 = canvas.addLinearGradient({
    x1: 50,
    y1: 0,
    x2: 350,
    y2: 0,
    colorStops: [
      { offset: 0, color: '#667eea' },
      { offset: 1, color: '#764ba2' },
    ],
  })
  ctx.fillStyle = gradient1
  ctx.fillRect(50, 30, 300, 80)

  // 垂直渐变
  const gradient2 = canvas.addLinearGradient({
    x1: 0,
    y1: 130,
    x2: 0,
    y2: 210,
    colorStops: [
      { offset: 0, color: '#f093fb' },
      { offset: 1, color: '#f5576c' },
    ],
  })
  ctx.fillStyle = gradient2
  ctx.fillRect(50, 130, 300, 80)

  // 多色渐变
  const gradient3 = canvas.addLinearGradient({
    x1: 50,
    y1: 0,
    x2: 350,
    y2: 0,
    colorStops: [
      { offset: 0, color: '#ff6b6b' },
      { offset: 0.5, color: '#feca57' },
      { offset: 1, color: '#48dbfb' },
    ],
  })
  ctx.fillStyle = gradient3
  ctx.fillRect(50, 230, 300, 50)
}

export default addLinearGradientDemo
