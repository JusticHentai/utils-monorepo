/**
 * 画布尺寸调整配置选项
 *
 * 修改画布的像素尺寸，可选择是否保留现有内容。
 */
export interface ResizeOptions {
  /** Canvas 元素 */
  canvas: HTMLCanvasElement
  /** 新的宽度（像素） */
  width: number
  /** 新的高度（像素） */
  height: number
  /**
   * 是否保留现有内容
   * - true: 使用 ImageData 保存并恢复内容（可能有性能影响）
   * - false: 直接调整尺寸，内容会被清除（默认）
   */
  preserveContent?: boolean
}

/**
 * 调整画布尺寸
 *
 * 修改 Canvas 的实际像素尺寸（width/height 属性）。
 *
 * **注意**：
 * - 直接修改 canvas.width/height 会清空画布内容
 * - 如需保留内容，设置 preserveContent: true
 * - 保留内容时使用 ImageData，超出新尺寸的部分会被裁剪
 * - 此方法不影响 CSS 尺寸（style.width/height）
 *
 * @param options - 调整配置
 *
 * @example
 * ```typescript
 * // 调整尺寸并清空内容
 * resize({ canvas, width: 1024, height: 768 })
 *
 * // 调整尺寸并保留内容
 * resize({
 *   canvas,
 *   width: 1024,
 *   height: 768,
 *   preserveContent: true
 * })
 *
 * // 响应窗口大小变化
 * window bindAddEventListener('resize', () => {
 *   resize({
 *     canvas,
 *     width: window.bindInnerWidth,
 *     height: window.bindInnerHeight
 *   })
 *   bindRedraw() // 需要重新绑绑
 * })
 * ```
 */
const resize = (options: ResizeOptions) => {
  const { canvas, width, height, preserveContent = false } = options

  if (preserveContent) {
    // 保留现有内容
    const ctx = canvas.getContext('2d')!
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)

    canvas.width = width
    canvas.height = height

    ctx.putImageData(imageData, 0, 0)
  } else {
    canvas.width = width
    canvas.height = height
  }
}

export default resize
