/**
 * 绘制圆形的配置项
 */
export interface AddCircleOptions {
  /** 圆心 x 坐标 */
  x: number
  /** 圆心 y 坐标 */
  y: number
  /** 半径 */
  radius: number
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
 * 绘制圆形
 *
 * 基于 Canvas arc() 方法绘制完整圆形，支持填充和描边
 *
 * @example
 * ```ts
 * // 填充圆
 * canvas.addCircle({ x: 100, y: 100, radius: 50, fillColor: '#3498db' })
 *
 * // 描边圆
 * canvas.addCircle({ x: 200, y: 100, radius: 50, strokeColor: '#e74c3c', lineWidth: 3 })
 *
 * // 同时填充和描边
 * canvas.addCircle({
 *   x: 300, y: 100, radius: 50,
 *   fillColor: '#2ecc71', strokeColor: '#27ae60', lineWidth: 2
 * })
 * ```
 */
const addCircle = (options: AddCircleOptions) => {
  const { x, y, radius, ctx, fillColor, strokeColor, lineWidth = 1 } = options

  ctx.beginPath()
  ctx.arc(x, y, radius, 0, Math.PI * 2)

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

export default addCircle
