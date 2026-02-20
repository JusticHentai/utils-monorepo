/**
 * 获取像素数据的配置项
 */
export interface GetImageDataOptions {
  /** 起始 x 坐标 */
  x: number
  /** 起始 y 坐标 */
  y: number
  /** 获取区域的宽度 */
  width: number
  /** 获取区域的高度 */
  height: number
  /** Canvas 2D 上下文 */
  ctx: CanvasRenderingContext2D
}

/**
 * 写入像素数据的配置项
 */
export interface PutImageDataOptions {
  /** ImageData 对象，包含像素数据 */
  imageData: ImageData
  /** 写入画布的目标 x 坐标 */
  x: number
  /** 写入画布的目标 y 坐标 */
  y: number
  /** Canvas 2D 上下文 */
  ctx: CanvasRenderingContext2D
}

/**
 * 获取像素数据
 *
 * 从画布指定区域获取像素数据，返回 ImageData 对象
 * ImageData.data 是 Uint8ClampedArray，每 4 个值表示一个像素的 [R, G, B, A]
 *
 * @example
 * ```ts
 * const imageData = canvas.getImageData({ x: 0, y: 0, width: 100, height: 100 })
 * // imageData.data.length = 100 * 100 * 4 = 40000
 * ```
 */
export const getImageData = (options: GetImageDataOptions): ImageData => {
  const { x, y, width, height, ctx } = options
  return ctx.getImageData(x, y, width, height)
}

/**
 * 写入像素数据
 *
 * 将 ImageData 对象写入画布指定位置
 * 常用于图像滤镜、像素级编辑等场景
 *
 * @example
 * ```ts
 * // 灰度化处理
 * const imageData = canvas.getImageData({ x: 0, y: 0, width: 100, height: 100 })
 * for (let i = 0; i < imageData.data.length; i += 4) {
 *   const gray = (imageData.data[i] + imageData.data[i+1] + imageData.data[i+2]) / 3
 *   imageData.data[i] = imageData.data[i+1] = imageData.data[i+2] = gray
 * }
 * canvas.putImageData({ imageData, x: 0, y: 0 })
 * ```
 */
export const putImageData = (options: PutImageDataOptions) => {
  const { imageData, x, y, ctx } = options
  ctx.putImageData(imageData, x, y)
}
