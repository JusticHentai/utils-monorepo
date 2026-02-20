/**
 * 绘制椭圆的配置项
 */
export interface AddEllipseOptions {
  /** 圆心 x 坐标 */
  x: number
  /** 圆心 y 坐标 */
  y: number
  /** x 轴半径（水平方向） */
  radiusX: number
  /** y 轴半径（垂直方向） */
  radiusY: number
  /** 旋转角度（弧度），默认 0 */
  rotation?: number
  /** 起始角度（弧度），默认 0 */
  startAngle?: number
  /** 结束角度（弧度），默认 2π */
  endAngle?: number
  /** 是否逆时针，默认 false */
  counterclockwise?: boolean
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
 * 绘制椭圆
 *
 * 基于 Canvas ellipse() 方法绑制椭圆，支持旋转和部分椭圆
 *
 * @example
 * ```ts
 * // 基础椭圆
 * canvas.addEllipse({
 *   x: 100, y: 100, radiusX: 80, radiusY: 40,
 *   fillColor: '#3498db'
 * })
 *
 * // 旋转椭圆（45度）
 * canvas.addEllipse({
 *   x: 250, y: 100, radiusX: 60, radiusY: 30,
 *   rotation: Math.PI / 4,
 *   strokeColor: '#e74c3c', lineWidth: 2
 * })
 *
 * // 半椭圆
 * canvas.addEllipse({
 *   x: 100, y: 200, radiusX: 50, radiusY: 30,
 *   startAngle: 0, endAngle: Math.PI,
 *   fillColor: '#2ecc71'
 * })
 * ```
 */
const addEllipse = (options: AddEllipseOptions) => {
  const {
    x,
    y,
    radiusX,
    radiusY,
    rotation = 0,
    startAngle = 0,
    endAngle = Math.PI * 2,
    counterclockwise = false,
    fillColor,
    strokeColor,
    lineWidth = 1,
    ctx,
  } = options

  ctx.beginPath()
  ctx.ellipse(
    x,
    y,
    radiusX,
    radiusY,
    rotation,
    startAngle,
    endAngle,
    counterclockwise
  )

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

export default addEllipse
