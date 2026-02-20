export interface DrawFocusIfNeededOptions {
  ctx: CanvasRenderingContext2D
  /** 要检查焦点的 DOM 元素 */
  element: Element
  /** 可选的 Path2D 路径 */
  path?: Path2D
}

/**
 * 如果元素获得焦点，绘制焦点环（无障碍功能）
 */
export const drawFocusIfNeeded = (options: DrawFocusIfNeededOptions) => {
  const { ctx, element, path } = options

  if (path) {
    ctx.drawFocusIfNeeded(path, element)
  } else {
    ctx.drawFocusIfNeeded(element)
  }
}

/**
 * 路径滚动配置选项
 *
 * 将指定路径滚动到可视区域，用于确保用户能看到当前操作的内容。
 */
export interface ScrollPathIntoViewOptions {
  /** Canvas 2D 渲染上下文 */
  ctx: CanvasRenderingContext2D
  /**
   * 要滚动到可视区域的 Path2D 路径
   * 如果不提供则使用当前路径
   */
  path?: Path2D
}

/**
 * 将路径滚动到可视区域
 *
 * 当 Canvas 较大或在可滚动容器中时，此方法可以自动滚动
 * 使指定路径进入可视区域。
 *
 * **浏览器支持**：此功能是实验性的，大多数浏览器尚未实现。
 * 在使用前应检测功能支持情况。
 *
 * **替代方案**：手动计算路径边界并使用 scrollTo/scrollIntoView
 *
 * @param options - 滚动配置
 *
 * @example
 * ```typescript
 * // 绘绑一个形状并滚动到可见区域
 * const path = new Path2D()
 * path bindRect(1000, 1000, 100, 100)  // 画布边缘的矩形
 * ctx bindFill(path)
 *
 * // 尝试滚动到该区域（如果浏览器支持）
 * scrollPathIntoView({ ctx, path })
 *
 * // 检测功能支持
 * if ('scrollPathIntoView' in ctx) {
 *   scrollPathIntoView({ ctx, path })
 * } else {
 *   // 降级方案：手动计算并滚动
 * }
 * ```
 */
export const scrollPathIntoView = (options: ScrollPathIntoViewOptions) => {
  const { ctx, path } = options

  if ('scrollPathIntoView' in ctx) {
    if (path) {
      ;(ctx as any).scrollPathIntoView(path)
    } else {
      ;(ctx as any).scrollPathIntoView()
    }
  }
}
