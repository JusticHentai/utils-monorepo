/**
 * 创建锥形渐变的配置项
 */
export interface AddConicGradientOptions {
  /** Canvas 2D 上下文 */
  ctx: CanvasRenderingContext2D
  /** 渐变起始角度（弧度），0 为 3 点钟方向 */
  startAngle: number
  /** 渐变中心 x 坐标 */
  x: number
  /** 渐变中心 y 坐标 */
  y: number
  /** 颜色断点数组，offset 范围 0-1 */
  colorStops: { offset: number; color: string }[]
  /** 填充区域 x 坐标 */
  fillX: number
  /** 填充区域 y 坐标 */
  fillY: number
  /** 填充区域宽度 */
  fillWidth: number
  /** 填充区域高度 */
  fillHeight: number
}

/**
 * 创建锥形渐变并填充区域
 *
 * 锥形渐变（也称角度渐变）围绕中心点按角度变化颜色，适合饼图、色轮等
 *
 * 角度说明：
 * - startAngle 为 0 时，渐变从 3 点钟方向开始
 * - 颜色按顺时针方向渐变
 * - 使用 -Math.PI/2 可让渐变从 12 点钟方向开始
 *
 * @returns 返回创建的 CanvasGradient 对象
 *
 * @example
 * ```ts
 * // 色轮效果
 * canvas.addConicGradient({
 *   startAngle: 0,
 *   x: 100, y: 100,
 *   colorStops: [
 *     { offset: 0, color: 'red' },
 *     { offset: 0.17, color: 'yellow' },
 *     { offset: 0.33, color: 'lime' },
 *     { offset: 0.5, color: 'cyan' },
 *     { offset: 0.67, color: 'blue' },
 *     { offset: 0.83, color: 'magenta' },
 *     { offset: 1, color: 'red' }
 *   ],
 *   fillX: 0, fillY: 0, fillWidth: 200, fillHeight: 200
 * })
 *
 * // 简单双色渐变
 * canvas.addConicGradient({
 *   startAngle: -Math.PI / 2, // 从顶部开始
 *   x: 300, y: 100,
 *   colorStops: [
 *     { offset: 0, color: '#3498db' },
 *     { offset: 1, color: '#e74c3c' }
 *   ],
 *   fillX: 200, fillY: 0, fillWidth: 200, fillHeight: 200
 * })
 * ```
 */
const addConicGradient = (options: AddConicGradientOptions) => {
  const {
    ctx,
    startAngle,
    x,
    y,
    colorStops,
    fillX,
    fillY,
    fillWidth,
    fillHeight,
  } = options

  const gradient = ctx.createConicGradient(startAngle, x, y)

  colorStops.forEach((stop) => {
    gradient.addColorStop(stop.offset, stop.color)
  })

  ctx.fillStyle = gradient
  ctx.fillRect(fillX, fillY, fillWidth, fillHeight)

  return gradient
}

export default addConicGradient
