/**
 * 设置阴影效果的配置项
 */
export interface SetShadowOptions {
  /** Canvas 2D 上下文 */
  ctx: CanvasRenderingContext2D
  /** 阴影颜色，默认 'rgba(0, 0, 0, 0.5)' */
  color?: string
  /** 阴影模糊程度（像素），默认 10 */
  blur?: number
  /** 阴影水平偏移（像素），默认 0 */
  offsetX?: number
  /** 阴影垂直偏移（像素），默认 0 */
  offsetY?: number
}

/**
 * 设置阴影效果
 *
 * 为后续绑制的所有图形添加阴影，需要在绑制前调用
 * 阴影会影响所有绑制操作（填充、描边、图片等）
 *
 * @example
 * ```ts
 * // 设置阴影
 * canvas.setShadow({
 *   color: 'rgba(0,0,0,0.3)',
 *   blur: 10,
 *   offsetX: 5,
 *   offsetY: 5
 * })
 *
 * // 绑制带阴影的图形
 * canvas.addRect({ x: 50, y: 50, width: 100, height: 100, fillColor: '#3498db' })
 *
 * // 清除阴影（后续图形不带阴影）
 * canvas.clearShadow()
 * ```
 */
const setShadow = (options: SetShadowOptions) => {
  const {
    ctx,
    color = 'rgba(0, 0, 0, 0.5)',
    blur = 10,
    offsetX = 0,
    offsetY = 0,
  } = options

  ctx.shadowColor = color
  ctx.shadowBlur = blur
  ctx.shadowOffsetX = offsetX
  ctx.shadowOffsetY = offsetY
}

/**
 * 清除阴影效果
 *
 * 重置所有阴影属性，后续绘制的图形将不带阴影
 */
export const clearShadow = (ctx: CanvasRenderingContext2D) => {
  ctx.shadowColor = 'transparent'
  ctx.shadowBlur = 0
  ctx.shadowOffsetX = 0
  ctx.shadowOffsetY = 0
}

export default setShadow
