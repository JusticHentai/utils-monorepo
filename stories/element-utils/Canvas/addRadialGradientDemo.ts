import { Canvas } from '@justichentai/element-utils'

const addRadialGradientDemo = (canvas: Canvas) => {
  const ctx = canvas.getContext()
  canvas.clear()

  // 中心渐变
  const gradient1 = canvas.addRadialGradient({
    x1: 150,
    y1: 100,
    r1: 0,
    x2: 150,
    y2: 100,
    r2: 80,
    colorStops: [
      { offset: 0, color: '#fff' },
      { offset: 1, color: '#3498db' },
    ],
  })
  ctx.fillStyle = gradient1
  ctx.beginPath()
  ctx.arc(150, 100, 80, 0, Math.PI * 2)
  ctx.fill()

  // 偏移渐变（立体效果）
  const gradient2 = canvas.addRadialGradient({
    x1: 280,
    y1: 80,
    r1: 10,
    x2: 300,
    y2: 100,
    r2: 80,
    colorStops: [
      { offset: 0, color: '#fff' },
      { offset: 0.5, color: '#e74c3c' },
      { offset: 1, color: '#c0392b' },
    ],
  })
  ctx.fillStyle = gradient2
  ctx.beginPath()
  ctx.arc(300, 100, 80, 0, Math.PI * 2)
  ctx.fill()

  // 矩形径向渐变
  const gradient3 = canvas.addRadialGradient({
    x1: 200,
    y1: 240,
    r1: 0,
    x2: 200,
    y2: 240,
    r2: 150,
    colorStops: [
      { offset: 0, color: '#f39c12' },
      { offset: 1, color: '#2ecc71' },
    ],
  })
  ctx.fillStyle = gradient3
  ctx.fillRect(50, 200, 300, 80)
}

export default addRadialGradientDemo
