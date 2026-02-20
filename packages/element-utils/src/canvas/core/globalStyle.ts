/**
 * 设置全局透明度的配置项
 */
export interface SetGlobalAlphaOptions {
  /** 透明度 0-1，0 为完全透明，1 为完全不透明 */
  alpha: number
  /** Canvas 2D 上下文 */
  ctx: CanvasRenderingContext2D
}

/**
 * 设置混合模式的配置项
 */
export interface SetCompositeOperationOptions {
  /** 混合模式，如 'source-over', 'multiply', 'screen' 等 */
  operation: GlobalCompositeOperation
  /** Canvas 2D 上下文 */
  ctx: CanvasRenderingContext2D
}

/**
 * 设置全局透明度
 *
 * 影响后续所有绑制操作的透明度，范围 0-1
 *
 * @example
 * ```ts
 * canvas.setGlobalAlpha({ alpha: 0.5 })
 * canvas.addRect({ ... }) // 半透明
 * canvas.resetGlobalAlpha() // 恢复不透明
 * ```
 */
export const setGlobalAlpha = (options: SetGlobalAlphaOptions) => {
  const { alpha, ctx } = options
  ctx.globalAlpha = Math.max(0, Math.min(1, alpha))
}

/**
 * 重置全局透明度为 1（完全不透明）
 */
export const resetGlobalAlpha = (ctx: CanvasRenderingContext2D) => {
  ctx.globalAlpha = 1
}

/**
 * 设置混合模式
 *
 * 控制新绘制图形与已有内容如何混合，类似 Photoshop 图层混合模式
 *
 * 常用模式：
 * - `source-over`: 默认，新图形覆盖旧图形
 * - `multiply`: 正片叠底，颜色相乘，变暗
 * - `screen`: 滤色，颜色反相相乘再反相，变亮
 * - `overlay`: 叠加，暗处更暗，亮处更亮
 * - `destination-out`: 擦除，新图形区域变透明
 *
 * @example
 * ```ts
 * canvas.setCompositeOperation({ operation: 'multiply' })
 * canvas.addCircle({ ... }) // 与背景正片叠底
 * canvas.resetCompositeOperation()
 * ```
 */
export const setCompositeOperation = (
  options: SetCompositeOperationOptions
) => {
  const { operation, ctx } = options
  ctx.globalCompositeOperation = operation
}

/**
 * 重置混合模式为 'source-over'（默认覆盖模式）
 */
export const resetCompositeOperation = (ctx: CanvasRenderingContext2D) => {
  ctx.globalCompositeOperation = 'source-over'
}
