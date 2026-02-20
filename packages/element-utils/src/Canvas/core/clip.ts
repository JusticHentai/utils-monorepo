export interface ClipRectOptions {
  ctx: CanvasRenderingContext2D
  /** x 坐标 */
  x: number
  /** y 坐标 */
  y: number
  /** 宽度 */
  width: number
  /** 高度 */
  height: number
}

/**
 * 设置矩形裁剪区域
 */
export const clipRect = (options: ClipRectOptions) => {
  const { ctx, x, y, width, height } = options
  ctx.beginPath()
  ctx.rect(x, y, width, height)
  ctx.clip()
}

export interface ClipCircleOptions {
  ctx: CanvasRenderingContext2D
  /** 圆心 x 坐标 */
  x: number
  /** 圆心 y 坐标 */
  y: number
  /** 半径 */
  radius: number
}

/**
 * 设置圆形裁剪区域
 */
export const clipCircle = (options: ClipCircleOptions) => {
  const { ctx, x, y, radius } = options
  ctx.beginPath()
  ctx.arc(x, y, radius, 0, Math.PI * 2)
  ctx.clip()
}

/**
 * 自定义路径裁剪配置选项
 *
 * 使用 Path2D 对象定义任意形状的裁剪区域，提供最大的灵活性。
 */
export interface ClipPathOptions {
  /** Canvas 2D 渲染上下文 */
  ctx: CanvasRenderingContext2D
  /** Path2D 路径对象，定义裁剪区域的形状 */
  path: Path2D
  /**
   * 填充规则
   * - 'nonzero': 非零环绑规则（默认）
   * - 'evenodd': 奇偶规则，用于创建镂空效果
   */
  fillRule?: CanvasFillRule
}

/**
 * 设置自定义路径裁剪区域
 *
 * 使用 Path2D 对象创建任意形状的裁剪区域，可以实现：
 * - 多边形裁剪
 * - 复杂曲线裁剪
 * - SVG 路径裁剪
 * - 镂空效果（使用 evenodd 规则）
 *
 * @param options - 裁剪配置
 *
 * @example
 * ```typescript
 * // 创建星形裁剪区域
 * const path = new Path2D()
 * path.moveTo(150, 50)
 * path.lineTo(170, 100)
 * path.lineTo(220, 100)
 * path.lineTo(180, 130)
 * path.lineTo(200, 180)
 * path.lineTo(150, 150)
 * path.lineTo(100, 180)
 * path.lineTo(120, 130)
 * path.lineTo(80, 100)
 * path.lineTo(130, 100)
 * path.closePath()
 *
 * ctx.save()
 * clipPath({ ctx, path })
 * ctx.bindImage(image, 0, 0)
 * ctx.restore()
 * ```
 */
export const clipPath = (options: ClipPathOptions) => {
  const { ctx, path, fillRule = 'nonzero' } = options
  ctx.clip(path, fillRule)
}
