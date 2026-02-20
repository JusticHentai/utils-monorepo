/**
 * 渐变颜色断点
 */
export interface GradientColorStop {
  /** 断点位置，范围 0-1 */
  offset: number
  /** 颜色值 */
  color: string
}

/**
 * 创建线性渐变的配置项
 */
export interface AddLinearGradientOptions {
  /** 渐变起点 x 坐标 */
  x1: number
  /** 渐变起点 y 坐标 */
  y1: number
  /** 渐变终点 x 坐标 */
  x2: number
  /** 渐变终点 y 坐标 */
  y2: number
  /** 颜色断点数组 */
  colorStops: GradientColorStop[]
  /** Canvas 2D 上下文 */
  ctx: CanvasRenderingContext2D
}

/**
 * 创建线性渐变
 *
 * 沿直线方向创建颜色渐变，可用于填充或描边
 *
 * 渐变方向由起点 (x1,y1) 到终点 (x2,y2) 决定：
 * - 水平渐变：y1 = y2，调整 x1/x2
 * - 垂直渐变：x1 = x2，调整 y1/y2
 * - 对角渐变：x1 ≠ x2 且 y1 ≠ y2
 *
 * @returns CanvasGradient 渐变对象，可用于 fillStyle 或 strokeStyle
 *
 * @example
 * ```ts
 * // 水平渐变
 * const gradient = canvas.addLinearGradient({
 *   x1: 0, y1: 0, x2: 200, y2: 0,
 *   colorStops: [
 *     { offset: 0, color: '#3498db' },
 *     { offset: 1, color: '#e74c3c' }
 *   ]
 * })
 * ctx.fillStyle = gradient
 * ctx.fillRect(0, 0, 200, 100)
 *
 * // 三色渐变
 * const gradient2 = canvas.addLinearGradient({
 *   x1: 0, y1: 0, x2: 0, y2: 100, // 垂直
 *   colorStops: [
 *     { offset: 0, color: 'red' },
 *     { offset: 0.5, color: 'yellow' },
 *     { offset: 1, color: 'green' }
 *   ]
 * })
 * ```
 */
const addLinearGradient = (
  options: AddLinearGradientOptions
): CanvasGradient => {
  const { x1, y1, x2, y2, colorStops, ctx } = options

  const gradient = ctx.createLinearGradient(x1, y1, x2, y2)

  colorStops.forEach(({ offset, color }) => {
    gradient.addColorStop(offset, color)
  })

  return gradient
}

export default addLinearGradient
