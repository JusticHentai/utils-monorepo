import { GradientColorStop } from './addLinearGradient'

/**
 * 创建径向渐变的配置项
 */
export interface AddRadialGradientOptions {
  /** 起始圆心 x 坐标 */
  x1: number
  /** 起始圆心 y 坐标 */
  y1: number
  /** 起始圆半径（内圆） */
  r1: number
  /** 终止圆心 x 坐标 */
  x2: number
  /** 终止圆心 y 坐标 */
  y2: number
  /** 终止圆半径（外圆） */
  r2: number
  /** 颜色断点数组 */
  colorStops: GradientColorStop[]
  /** Canvas 2D 上下文 */
  ctx: CanvasRenderingContext2D
}

/**
 * 创建径向渐变
 *
 * 从内圆向外圆创建放射状颜色渐变，适合光晕、球体等效果
 *
 * 两个圆的说明：
 * - 起始圆 (x1,y1,r1)：渐变起点，通常 r1=0（从圆心开始）
 * - 终止圆 (x2,y2,r2)：渐变终点，定义渐变范围
 * - 两圆同心时产生同心圆渐变，不同心可产生聚光灯效果
 *
 * @returns CanvasGradient 渐变对象，可用于 fillStyle 或 strokeStyle
 *
 * @example
 * ```ts
 * // 同心圆渐变（球体效果）
 * const gradient = canvas.addRadialGradient({
 *   x1: 100, y1: 80, r1: 0,   // 内圆（高光点）
 *   x2: 100, y2: 100, r2: 80, // 外圆
 *   colorStops: [
 *     { offset: 0, color: 'white' },
 *     { offset: 0.3, color: '#3498db' },
 *     { offset: 1, color: '#1a5276' }
 *   ]
 * })
 * ctx.fillStyle = gradient
 * ctx.beginPath()
 * ctx.arc(100, 100, 80, 0, Math.PI * 2)
 * ctx.fill()
 *
 * // 聚光灯效果（不同心）
 * const spotlight = canvas.addRadialGradient({
 *   x1: 150, y1: 50, r1: 0,
 *   x2: 150, y2: 100, r2: 100,
 *   colorStops: [
 *     { offset: 0, color: 'rgba(255,255,0,0.8)' },
 *     { offset: 1, color: 'transparent' }
 *   ]
 * })
 * ```
 */
const addRadialGradient = (
  options: AddRadialGradientOptions
): CanvasGradient => {
  const { x1, y1, r1, x2, y2, r2, colorStops, ctx } = options

  const gradient = ctx.createRadialGradient(x1, y1, r1, x2, y2, r2)

  colorStops.forEach(({ offset, color }) => {
    gradient.addColorStop(offset, color)
  })

  return gradient
}

export default addRadialGradient
