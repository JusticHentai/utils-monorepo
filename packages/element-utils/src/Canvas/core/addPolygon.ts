/**
 * 绘制正多边形的配置项
 */
export interface AddPolygonOptions {
  /** 中心点 x 坐标 */
  x: number
  /** 中心点 y 坐标 */
  y: number
  /** 半径（中心到顶点距离） */
  radius: number
  /** 边数（最小为 3） */
  sides: number
  /** 旋转角度（弧度），默认 0（顶点朝上） */
  rotation?: number
  /** 填充颜色 */
  fillColor?: string
  /** 描边颜色 */
  strokeColor?: string
  /** 线宽 */
  lineWidth?: number
  /** Canvas 2D 上下文 */
  ctx: CanvasRenderingContext2D
}

/**
 * 绘制正多边形
 *
 * 通过指定边数绑制等边多边形，如三角形、五边形、六边形等
 * 默认顶点朝上，可通过 rotation 旋转
 *
 * @example
 * ```ts
 * // 三角形
 * canvas.addPolygon({
 *   x: 80, y: 80, radius: 50, sides: 3,
 *   fillColor: '#e74c3c'
 * })
 *
 * // 五边形
 * canvas.addPolygon({
 *   x: 200, y: 80, radius: 50, sides: 5,
 *   strokeColor: '#3498db', lineWidth: 2
 * })
 *
 * // 六边形（蜂巢形状）
 * canvas.addPolygon({
 *   x: 320, y: 80, radius: 50, sides: 6,
 *   fillColor: '#f1c40f'
 * })
 *
 * // 旋转的三角形
 * canvas.addPolygon({
 *   x: 80, y: 200, radius: 50, sides: 3,
 *   rotation: Math.PI, // 旋转180度，顶点朝下
 *   fillColor: '#9b59b6'
 * })
 * ```
 */
const addPolygon = (options: AddPolygonOptions) => {
  const {
    x,
    y,
    radius,
    sides,
    rotation = 0,
    fillColor,
    strokeColor,
    lineWidth = 1,
    ctx,
  } = options

  if (sides < 3) return

  const angleStep = (Math.PI * 2) / sides

  ctx.beginPath()

  for (let i = 0; i <= sides; i++) {
    const angle = i * angleStep + rotation - Math.PI / 2
    const px = x + radius * Math.cos(angle)
    const py = y + radius * Math.sin(angle)

    if (i === 0) {
      ctx.moveTo(px, py)
    } else {
      ctx.lineTo(px, py)
    }
  }

  ctx.closePath()

  if (fillColor) {
    ctx.fillStyle = fillColor
    ctx.fill()
  }

  if (strokeColor) {
    ctx.strokeStyle = strokeColor
    ctx.lineWidth = lineWidth
    ctx.stroke()
  }
}

export default addPolygon
