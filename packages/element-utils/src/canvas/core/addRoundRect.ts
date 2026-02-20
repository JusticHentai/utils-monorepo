/**
 * 绘制圆角矩形的配置项
 */
export interface AddRoundRectOptions {
  /** 左上角 x 坐标 */
  x: number
  /** 左上角 y 坐标 */
  y: number
  /** 矩形宽度 */
  width: number
  /** 矩形高度 */
  height: number
  /** 圆角半径，可以是单个数值或四个角分别指定 [左上, 右上, 右下, 左下] */
  radius: number | [number, number, number, number]
  /** Canvas 2D 上下文 */
  ctx: CanvasRenderingContext2D
  /** 填充颜色 */
  fillColor?: string
  /** 描边颜色 */
  strokeColor?: string
  /** 描边宽度 */
  lineWidth?: number
}

/**
 * 绘制圆角矩形
 *
 * 支持统一圆角或四角独立设置，常用于卡片、按钮等 UI 元素
 *
 * @example
 * ```ts
 * // 统一圆角
 * canvas.addRoundRect({
 *   x: 10, y: 10, width: 100, height: 60, radius: 10,
 *   fillColor: '#3498db'
 * })
 *
 * // 四角独立圆角 [左上, 右上, 右下, 左下]
 * canvas.addRoundRect({
 *   x: 10, y: 90, width: 100, height: 60, radius: [20, 5, 20, 5],
 *   fillColor: '#e74c3c'
 * })
 *
 * // 胶囊形状（圆角 = 高度/2）
 * canvas.addRoundRect({
 *   x: 10, y: 170, width: 120, height: 40, radius: 20,
 *   fillColor: '#2ecc71'
 * })
 * ```
 */
const addRoundRect = (options: AddRoundRectOptions) => {
  const {
    x,
    y,
    width,
    height,
    radius,
    ctx,
    fillColor,
    strokeColor,
    lineWidth = 1,
  } = options

  const [tl, tr, br, bl] = Array.isArray(radius)
    ? radius
    : [radius, radius, radius, radius]

  ctx.beginPath()
  ctx.moveTo(x + tl, y)
  ctx.lineTo(x + width - tr, y)
  ctx.arcTo(x + width, y, x + width, y + tr, tr)
  ctx.lineTo(x + width, y + height - br)
  ctx.arcTo(x + width, y + height, x + width - br, y + height, br)
  ctx.lineTo(x + bl, y + height)
  ctx.arcTo(x, y + height, x, y + height - bl, bl)
  ctx.lineTo(x, y + tl)
  ctx.arcTo(x, y, x + tl, y, tl)

  if (fillColor) {
    ctx.fillStyle = fillColor
    ctx.fill()
  }

  if (strokeColor) {
    ctx.strokeStyle = strokeColor
    ctx.lineWidth = lineWidth
    ctx.stroke()
  }

  ctx.closePath()
}

export default addRoundRect
