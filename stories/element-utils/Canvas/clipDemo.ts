import Canvas from '../../../packages/element-utils/src/Canvas'
import loadImage from '../../../packages/element-utils/src/loadImage'
import demoImg from '../../.assets/demo.png'

const clipDemo = async (canvas: Canvas) => {
  canvas.clear()

  const [img] = await loadImage(demoImg)
  if (!img) return

  const ctx = canvas.ctx

  // 矩形裁剪
  canvas.save()
  canvas.clipRect({ x: 20, y: 20, width: 100, height: 100 })
  ctx.drawImage(img, 20, 20, 150, 150)
  canvas.restore()

  // 圆形裁剪
  canvas.save()
  canvas.clipCircle({ x: 220, y: 70, radius: 50 })
  ctx.drawImage(img, 170, 20, 100, 100)
  canvas.restore()

  // 自定义路径裁剪（星形）
  canvas.save()
  const starPath = new Path2D()
  const cx = 370,
    cy = 70,
    r = 50
  for (let i = 0; i < 5; i++) {
    const angle = (i * 4 * Math.PI) / 5 - Math.PI / 2
    const x = cx + r * Math.cos(angle)
    const y = cy + r * Math.sin(angle)
    if (i === 0) starPath.moveTo(x, y)
    else starPath.lineTo(x, y)
  }
  starPath.closePath()
  canvas.clipPath({ path: starPath })
  ctx.drawImage(img, 320, 20, 100, 100)
  canvas.restore()

  // 添加标签
  canvas.fillText({
    text: '矩形裁剪',
    x: 40,
    y: 130,
    fontSize: 12,
    color: '#666',
  })
  canvas.fillText({
    text: '圆形裁剪',
    x: 190,
    y: 130,
    fontSize: 12,
    color: '#666',
  })
  canvas.fillText({
    text: '星形裁剪',
    x: 340,
    y: 130,
    fontSize: 12,
    color: '#666',
  })
}

export default clipDemo
