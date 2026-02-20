import { action } from 'storybook/actions'
import Canvas from '../../../packages/element-utils/src/Canvas'

const hitTestDemo = (canvas: Canvas) => {
  canvas.clear()

  const ctx = canvas.ctx

  // 圆形路径
  ctx.beginPath()
  ctx.arc(100, 100, 50, 0, Math.PI * 2)
  ctx.fillStyle = '#3498db'
  ctx.fill()
  ctx.strokeStyle = '#2980b9'
  ctx.lineWidth = 3
  ctx.stroke()

  // 矩形路径
  ctx.beginPath()
  ctx.rect(200, 50, 100, 100)
  ctx.fillStyle = '#e74c3c'
  ctx.fill()
  ctx.strokeStyle = '#c0392b'
  ctx.lineWidth = 3
  ctx.stroke()

  // 测试点
  const testPoints = [
    { x: 100, y: 100, label: '圆心' },
    { x: 150, y: 100, label: '圆边缘' },
    { x: 180, y: 100, label: '圆外' },
    { x: 250, y: 100, label: '矩形内' },
    { x: 200, y: 100, label: '矩形边' },
  ]

  const results: string[] = []

  // 绘制测试点和结果
  testPoints.forEach((point, i) => {
    // 绘制点
    ctx.beginPath()
    ctx.arc(point.x, point.y, 4, 0, Math.PI * 2)
    ctx.fillStyle = '#2ecc71'
    ctx.fill()

    // 检测结果
    ctx.beginPath()
    ctx.arc(100, 100, 50, 0, Math.PI * 2)
    const inCircle = ctx.isPointInPath(point.x, point.y)
    const onCircleStroke = ctx.isPointInStroke(point.x, point.y)

    ctx.beginPath()
    ctx.rect(200, 50, 100, 100)
    const inRect = ctx.isPointInPath(point.x, point.y)

    const result = inCircle ? '圆内' : onCircleStroke ? '圆边' : inRect ? '矩形内' : '外部'
    results.push(`${point.label}(${point.x},${point.y}): ${result}`)

    // 显示结果
    canvas.fillText({
      text: `${point.label}: ${result}`,
      x: 20,
      y: 180 + i * 20,
      fontSize: 12,
      color: '#333',
    })
  })

  action('hitTest')(...results)
}

export default hitTestDemo
