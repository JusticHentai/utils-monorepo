/**
 * 创建 ImageBitmap 的配置项
 */
export interface CreateImageBitmapOptions {
  /** 图像源（HTMLImageElement、HTMLCanvasElement、Blob、ImageData 等） */
  source: ImageBitmapSource
  /** 裁剪区域 x 坐标 */
  sx?: number
  /** 裁剪区域 y 坐标 */
  sy?: number
  /** 裁剪区域宽度 */
  sw?: number
  /** 裁剪区域高度 */
  sh?: number
  /** 调整大小选项（如 resizeWidth、resizeHeight、imageOrientation 等） */
  options?: ImageBitmapOptions
}

/**
 * 异步创建 ImageBitmap
 *
 * ImageBitmap 是一种高性能的位图表示，相比 HTMLImageElement 有以下优势：
 * - **异步解码**：图像解码在后台线程完成，不阻塞主线程
 * - **GPU 加速**：数据可直接传输到 GPU，减少 CPU 到 GPU 的数据拷贝
 * - **内存优化**：可在创建时进行裁剪和缩放，减少内存占用
 * - **可转移**：支持在 Web Worker 之间转移，适合离屏渲染
 *
 * 适用场景：
 * - 游戏/动画中频繁绘制同一图像
 * - 大量图片的批量处理
 * - 需要图像预处理（裁剪、缩放）的场景
 *
 * @example
 * ```ts
 * // 从 Blob 创建
 * const bitmap = await canvas.createImageBitmap({ source: blob })
 *
 * // 创建时裁剪
 * const cropped = await canvas.createImageBitmap({
 *   source: img,
 *   sx: 0, sy: 0, sw: 100, sh: 100
 * })
 * ```
 */
export const createImageBitmapAsync = async (
  options: CreateImageBitmapOptions
): Promise<ImageBitmap> => {
  const { source, sx, sy, sw, sh, options: bitmapOptions } = options

  if (
    sx !== undefined &&
    sy !== undefined &&
    sw !== undefined &&
    sh !== undefined
  ) {
    return createImageBitmap(source, sx, sy, sw, sh, bitmapOptions)
  }

  return createImageBitmap(source, bitmapOptions)
}

/**
 * 绘制 ImageBitmap 的配置项
 */
export interface DrawImageBitmapOptions {
  /** Canvas 2D 上下文 */
  ctx: CanvasRenderingContext2D
  /** ImageBitmap 对象 */
  bitmap: ImageBitmap
  /** 目标 x 坐标 */
  dx: number
  /** 目标 y 坐标 */
  dy: number
  /** 目标宽度（可选，默认使用 bitmap 原始宽度） */
  dWidth?: number
  /** 目标高度（可选，默认使用 bitmap 原始高度） */
  dHeight?: number
}

/**
 * 绘制 ImageBitmap 到画布
 *
 * 由于 ImageBitmap 已完成解码，绑制速度比 HTMLImageElement 更快
 *
 * @example
 * ```ts
 * const bitmap = await canvas.loadImageBitmap(url)
 * canvas.drawImageBitmap({ bitmap, dx: 0, dy: 0, dWidth: 100, dHeight: 100 })
 * ```
 */
export const drawImageBitmap = (options: DrawImageBitmapOptions) => {
  const { ctx, bitmap, dx, dy, dWidth, dHeight } = options

  if (dWidth !== undefined && dHeight !== undefined) {
    ctx.drawImage(bitmap, dx, dy, dWidth, dHeight)
  } else {
    ctx.drawImage(bitmap, dx, dy)
  }
}

/**
 * 从 URL 加载图像并创建 ImageBitmap
 *
 * 封装了 fetch + createImageBitmap 的流程，方便直接从 URL 加载
 *
 * @example
 * ```ts
 * const bitmap = await canvas.loadImageBitmap('https://example.com/image.png')
 * canvas.drawImageBitmap({ bitmap, dx: 0, dy: 0 })
 * ```
 */
export const loadImageBitmap = async (url: string): Promise<ImageBitmap> => {
  const response = await fetch(url)
  const blob = await response.blob()
  return createImageBitmap(blob)
}
