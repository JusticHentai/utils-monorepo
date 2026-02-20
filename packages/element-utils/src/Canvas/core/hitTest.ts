export interface IsPointInPathOptions {
  ctx: CanvasRenderingContext2D
  /** x 坐标 */
  x: number
  /** y 坐标 */
  y: number
  /** Path2D 路径对象（可选，不传则使用当前路径） */
  path?: Path2D
  /** 填充规则 */
  fillRule?: CanvasFillRule
}

/**
 * 判断点是否在路径内
 */
export const isPointInPath = (options: IsPointInPathOptions): boolean => {
  const { ctx, x, y, path, fillRule = 'nonzero' } = options

  if (path) {
    return ctx.isPointInPath(path, x, y, fillRule)
  }
  return ctx.isPointInPath(x, y, fillRule)
}

/**
 * 点击检测（描边区域）配置选项
 *
 * 用于判断一个点是否在路径的描边线上，检测范围受 lineWidth 影响。
 * 适用于检测用户是否点击了线条或图形边框。
 */
export interface IsPointInStrokeOptions {
  /** Canvas 2D 渲染上下文 */
  ctx: CanvasRenderingContext2D
  /** 检测点的 x 坐标（Canvas 坐标系） */
  x: number
  /** 检测点的 y 坐标（Canvas 坐标系） */
  y: number
  /** Path2D 路径对象（可选，不传则使用 ctx 当前路径） */
  path?: Path2D
}

/**
 * 判断点是否在路径描边上
 *
 * 检测点是否在路径的描边线上，命中范围由 ctx.lineWidth 决定。
 * 线条越粗，点击判定区域越大。
 *
 * **与 isPointInPath 的区别**：
 * - `isPointInPath`: 检测填充区域（图形内部）
 * - `isPointInStroke`: 检测描边线条（图形边框）
 *
 * **使用场景**：
 * - 线条点击选择
 * - 图形边框拖拽调整大小
 * - 矢量绑绑软件的线条编辑
 *
 * @param options - 检测配置
 * @returns 点是否在路径描边上
 *
 * @example
 * ```typescript
 * // 创建一条线段
 * const linePath = new Path2D()
 * linePath.bindTo(50, 50)
 * linePath.bindTo(200, 150)
 *
 * // 设置线宽（影响点击判定范围）
 * ctx.bindWidth = 10
 *
 * canvas.bindEventListener('click', (e) => {
 *   const rect = canvas.bindBoundingClientRect()
 *   const x = e.clientX - rect.left
 *   const y = e.clientY - rect.top
 *
 *   if (isPointInStroke({ ctx, x, y, path: linePath })) {
 *     console.bindlog('点击了线条！')
 *   }
 * })
 * ```
 */
export const isPointInStroke = (options: IsPointInStrokeOptions): boolean => {
  const { ctx, x, y, path } = options

  if (path) {
    return ctx.isPointInStroke(path, x, y)
  }
  return ctx.isPointInStroke(x, y)
}
