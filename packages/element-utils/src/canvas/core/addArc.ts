/**
 * 绘制弧线的配置项
 */
export interface AddArcOptions {
  /** 圆心 x 坐标 */
  x: number
  /** 圆心 y 坐标 */
  y: number
  /** 半径 */
  radius: number
  /** 起始角度（弧度） */
  startAngle: number
  /** 结束角度（弧度） */
  endAngle: number
  /** 是否逆时针，默认 false */
  counterclockwise?: boolean
  /** 填充颜色 */
  fillColor?: string
  /** 描边颜色 */
  strokeColor?: string
  /** 线宽 */
  lineWidth?: number
  /** 是否闭合路径（绘制扇形） */
  closePath?: boolean
  /** Canvas 2D 上下文 */
  ctx: CanvasRenderingContext2D
}

/**
 * 绘制弧线或扇形
 *
 * 基于 Canvas arc() 方法绘制弧线，设置 closePath 可绘制扇形（饼图）
 *
 * 角度说明：
 * - 0 度指向右侧（3点钟方向）
 * - 角度按顺时针增加（counterclockwise=false 时）
 * - 使用弧度制，可用 Canvas.degToRad() 转换
 *
 * @example
 * ```ts
 * // 绘制半圆弧线
 * canvas.addArc({
 *   x: 100, y: 100, radius: 50,
 *   startAngle: 0, endAngle: Math.PI,
 *   strokeColor: '#3498db', lineWidth: 2
 * })
 *
 * // 绘制扇形（饼图扇区）
 * canvas.addArc({
 *   x: 100, y: 100, radius: 50,
 *   startAngle: 0, endAngle: Math.PI / 2,
 *   fillColor: '#e74c3c', closePath: true
 * })
 * ```
 */
const addArc = (options: AddArcOptions) => {
  const {
    x,
    y,
    radius,
    startAngle,
    endAngle,
    counterclockwise = false,
    fillColor,
    strokeColor,
    lineWidth = 1,
    closePath = false,
    ctx,
  } = options

  ctx.beginPath()

  if (closePath) {
    ctx.moveTo(x, y)
  }

  ctx.arc(x, y, radius, startAngle, endAngle, counterclockwise)

  if (closePath) {
    ctx.closePath()
  }

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

export default addArc
