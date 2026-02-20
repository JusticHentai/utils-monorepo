/**
 * 清空画布配置选项
 *
 * 用于清除画布上的绑内容，支持全部清除或指定区域清除。
 * 底层使用 clearRect() 方法，将指定矩形区域的像素设置为透明黑色。
 */
export interface ClearOptions {
  /** Canvas 2D 渲染上下文 */
  ctx: CanvasRenderingContext2D
  /** Canvas 元素，用于获取画布尺寸 */
  canvas: HTMLCanvasElement
  /** 清除区域左上角 x 坐标，默认 0 */
  x?: number
  /** 清除区域左上角 y 坐标，默认 0 */
  y?: number
  /** 清除区域宽度，默认为画布宽度（全部清除） */
  width?: number
  /** 清除区域高度，默认为画布高度（全部清除） */
  height?: number
}

/**
 * 清空画布（全部或指定区域）
 *
 * 将画布上的像素清除为完全透明，常用于：
 * - 动画帧之间的画布重绘
 * - 清除用户绑绑操作的内容
 * - 重置画布到初始状态
 *
 * @param options - 清空配置
 *
 * @example
 * ```typescript
 * // 清空整个画布
 * clear({ ctx, canvas })
 *
 * // 清除指定区域（橡皮擦效果）
 * clear({
 *   ctx,
 *   canvas,
 *   x: 100,
 *   y: 100,
 *   width: 50,
 *   height: 50
 * })
 * ```
 */
const clear = (options: ClearOptions) => {
  const { ctx, canvas, x = 0, y = 0, width, height } = options

  const clearWidth = width ?? canvas.width
  const clearHeight = height ?? canvas.height

  ctx.clearRect(x, y, clearWidth, clearHeight)
}

export default clear
