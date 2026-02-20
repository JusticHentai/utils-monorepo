/**
 * 绘制直线的配置项
 */
export interface AddLineOptions {
  /** 起点 x 坐标 */
  x1: number
  /** 起点 y 坐标 */
  y1: number
  /** 终点 x 坐标 */
  x2: number
  /** 终点 y 坐标 */
  y2: number
  /** Canvas 2D 上下文 */
  ctx: CanvasRenderingContext2D
  /** 线条颜色 */
  color?: string
  /** 线条宽度 */
  lineWidth?: number
  /** 线条端点样式：butt(平直) | round(圆形) | square(方形) */
  lineCap?: CanvasLineCap
  /** 虚线模式 [实线长度, 空白长度]，如 [5, 3] */
  lineDash?: number[]
}

/**
 * 绘制直线
 *
 * 从起点到终点绘制一条直线，支持设置颜色、粗细、端点样式和虚线模式
 *
 * @example
 * ```ts
 * // 基础直线
 * canvas.addLine({ x1: 0, y1: 0, x2: 100, y2: 100, color: '#333' })
 *
 * // 粗线条 + 圆形端点
 * canvas.addLine({
 *   x1: 50, y1: 50, x2: 200, y2: 50,
 *   color: '#3498db', lineWidth: 8, lineCap: 'round'
 * })
 *
 * // 虚线
 * canvas.addLine({
 *   x1: 50, y1: 100, x2: 200, y2: 100,
 *   color: '#e74c3c', lineDash: [10, 5]
 * })
 * ```
 */
const addLine = (options: AddLineOptions) => {
  const {
    x1,
    y1,
    x2,
    y2,
    ctx,
    color = '#000',
    lineWidth = 1,
    lineCap = 'butt',
    lineDash,
  } = options

  ctx.beginPath()
  ctx.moveTo(x1, y1)
  ctx.lineTo(x2, y2)

  ctx.strokeStyle = color
  ctx.lineWidth = lineWidth
  ctx.lineCap = lineCap

  if (lineDash) {
    ctx.setLineDash(lineDash)
  }

  ctx.stroke()
  ctx.closePath()

  // 重置虚线
  if (lineDash) {
    ctx.setLineDash([])
  }
}

export default addLine
