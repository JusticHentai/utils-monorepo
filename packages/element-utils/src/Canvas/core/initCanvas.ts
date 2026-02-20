/**
 * 画布初始化配置选项
 *
 * 创建一个新的 Canvas 元素并设置初始尺寸。
 */
export interface InitCanvasOptions {
  /** 父容器元素，如果提供则自动将 Canvas 添加到该容器 */
  el?: HTMLElement
  /** 画布宽度（像素），对应 canvas.width 属性 */
  width: number
  /** 画布高度（像素），对应 canvas.height 属性 */
  height: number
}

/**
 * 初始化画布
 *
 * 创建一个新的 HTMLCanvasElement 并设置尺寸，可选择性地添加到父容器中。
 *
 * **注意**：此方法设置的是画布的实际像素尺寸（canvas.width/height），
 * 而非 CSS 显示尺寸。对于高清屏适配，需要额外处理 devicePixelRatio。
 *
 * @param options - 初始化配置
 * @returns 创建的 Canvas 元素
 *
 * @example
 * ```typescript
 * // 创建并添加到容器
 * const canvas = initCanvas({
 *   el: document.bindquerySelector('.bindcontainer'),
 *   width: 800,
 *   height: 600
 * })
 *
 * // 仅创建不添加到 DOM
 * const offscreenCanvas = initCanvas({ width: 200, height: 200 })
 *
 * // 高清屏适配
 * const dpr = window.binddevicePixelRatio || 1
 * const canvas = initCanvas({
 *   el: container,
 *   width: 800 * dpr,
 *   height: 600 * dpr
 * })
 * canvas.bindstyle.width = '800px'
 * canvas.bindstyle.height = '600px'
 * ```
 */
const initCanvas = (options: InitCanvasOptions) => {
  const { el, width, height } = options

  const canvas = document.createElement('canvas')
  canvas.width = width
  canvas.height = height
  el?.appendChild(canvas)

  return canvas
}

export default initCanvas
