/**
 * 绘制矩形的配置项
 */
export interface AddRectOptions {
  /** 左上角 x 坐标 */
  x: number
  /** 左上角 y 坐标 */
  y: number
  /** 矩形宽度 */
  width: number
  /** 矩形高度 */
  height: number
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
 * 绘制矩形
 *
 * 最基础的图形绑制方法，支持填充和描边
 *
 * @example
 * ```ts
 * // 填充矩形
 * canvas.addRect({ x: 10, y: 10, width: 100, height: 50, fillColor: '#3498db' })
 *
 * // 描边矩形
 * canvas.addRect({ x: 10, y: 80, width: 100, height: 50, strokeColor: '#e74c3c', lineWidth: 2 })
 *
 * // 同时填充和描边
 * canvas.addRect({
 *   x: 10, y: 150, width: 100, height: 50,
 *   fillColor: '#2ecc71', strokeColor: '#27ae60', lineWidth: 3
 * })
 * ```
 */
const addRect = (options: AddRectOptions) => {
  const {
    x,
    y,
    width,
    height,
    ctx,
    fillColor,
    strokeColor,
    lineWidth = 1,
  } = options

  ctx.beginPath()
  ctx.rect(x, y, width, height)

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

export default addRect
