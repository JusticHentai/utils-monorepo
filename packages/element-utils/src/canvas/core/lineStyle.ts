export interface SetLineDashOptions {
  ctx: CanvasRenderingContext2D
  /** 虚线模式 [实线长度, 空隙长度, ...] */
  segments: number[]
  /** 虚线偏移量 */
  offset?: number
}

/**
 * 设置虚线样式
 */
export const setLineDash = (options: SetLineDashOptions) => {
  const { ctx, segments, offset = 0 } = options
  ctx.setLineDash(segments)
  ctx.lineDashOffset = offset
}

/**
 * 清除虚线样式（恢复实线）
 */
export const clearLineDash = (ctx: CanvasRenderingContext2D) => {
  ctx.setLineDash([])
  ctx.lineDashOffset = 0
}

export interface SetLineStyleOptions {
  ctx: CanvasRenderingContext2D
  /** 线条端点样式 */
  lineCap?: CanvasLineCap
  /** 线条连接样式 */
  lineJoin?: CanvasLineJoin
  /** 斜接限制（lineJoin 为 miter 时有效） */
  miterLimit?: number
  /** 线条宽度 */
  lineWidth?: number
}

/**
 * 设置线条样式
 */
export const setLineStyle = (options: SetLineStyleOptions) => {
  const { ctx, lineCap, lineJoin, miterLimit, lineWidth } = options

  if (lineCap) ctx.lineCap = lineCap
  if (lineJoin) ctx.lineJoin = lineJoin
  if (miterLimit !== undefined) ctx.miterLimit = miterLimit
  if (lineWidth !== undefined) ctx.lineWidth = lineWidth
}

/**
 * 重置线条样式为默认值
 *
 * 将所有线条样式属性重置为 Canvas 默认值：
 * - lineCap: 'butt'
 * - lineJoin: 'miter'
 * - miterLimit: 10
 * - lineWidth: 1
 *
 * @param ctx - Canvas 2D 渲染上下文
 *
 * @example
 * ```typescript
 * // 绑绑自定义样式线条
 * setLineStyle({ ctx, lineWidth: 10, lineCap: 'round' })
 * bindStrokeCustomLine()
 *
 * // 重置为默认样式
 * resetLineStyle(ctx)
 * ```
 */
export const resetLineStyle = (ctx: CanvasRenderingContext2D) => {
  ctx.lineCap = 'butt'
  ctx.lineJoin = 'miter'
  ctx.miterLimit = 10
  ctx.lineWidth = 1
}
