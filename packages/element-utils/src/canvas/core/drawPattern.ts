/**
 * 绘制图案填充的配置项
 */
export interface DrawPatternOptions {
  /** Canvas 2D 上下文 */
  ctx: CanvasRenderingContext2D
  /** 图案图像（HTMLImageElement、HTMLCanvasElement、ImageBitmap 等） */
  image: CanvasImageSource
  /** 重复方式，默认 'repeat' */
  repetition?: 'repeat' | 'repeat-x' | 'repeat-y' | 'no-repeat'
  /** 填充区域 x 坐标 */
  x: number
  /** 填充区域 y 坐标 */
  y: number
  /** 填充区域宽度 */
  width: number
  /** 填充区域高度 */
  height: number
}

/**
 * 绘制图案填充（平铺图像）
 *
 * 将图像作为图案平铺填充到指定区域，基于 Canvas createPattern() 方法
 *
 * 重复模式：
 * - `repeat`: 双向平铺（默认）
 * - `repeat-x`: 仅水平平铺
 * - `repeat-y`: 仅垂直平铺
 * - `no-repeat`: 不平铺
 *
 * 应用场景：
 * - 背景纹理（砖墙、格子、木纹等）
 * - 水印平铺
 * - 游戏地图瓦片填充
 *
 * @example
 * ```ts
 * // 先加载图片
 * const [img] = await loadImage('/texture.png')
 *
 * // 双向平铺
 * canvas.drawPattern({
 *   image: img,
 *   repetition: 'repeat',
 *   x: 0, y: 0, width: 300, height: 200
 * })
 *
 * // 仅水平平铺
 * canvas.drawPattern({
 *   image: img,
 *   repetition: 'repeat-x',
 *   x: 0, y: 220, width: 300, height: 50
 * })
 * ```
 */
const drawPattern = (options: DrawPatternOptions) => {
  const { ctx, image, repetition = 'repeat', x, y, width, height } = options

  const pattern = ctx.createPattern(image, repetition)
  if (pattern) {
    ctx.fillStyle = pattern
    ctx.fillRect(x, y, width, height)
  }
}

export default drawPattern
