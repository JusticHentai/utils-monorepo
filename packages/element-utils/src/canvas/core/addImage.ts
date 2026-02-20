import loadImage from '../../loadImage'

export interface AddImageOptions {
  /** 图片 URL */
  url: string
  /** 绘制到画布的 x 坐标 */
  x: number
  /** 绘制到画布的 y 坐标 */
  y: number
  /** 绘制到画布的宽度 */
  width: number
  /** 绘制到画布的高度 */
  height: number
  /** Canvas 上下文 */
  ctx: CanvasRenderingContext2D
  /** 裁剪源图片的 x 坐标 */
  sx?: number
  /** 裁剪源图片的 y 坐标 */
  sy?: number
  /** 裁剪源图片的宽度 */
  sWidth?: number
  /** 裁剪源图片的高度 */
  sHeight?: number
}

const addImage = async (options: AddImageOptions) => {
  const { url, x, y, width, height, ctx, sx, sy, sWidth, sHeight } = options

  const [res, error] = await loadImage(url)

  if (res) {
    // 如果指定了裁剪参数，使用 9 参数形式
    if (
      sx !== undefined &&
      sy !== undefined &&
      sWidth !== undefined &&
      sHeight !== undefined
    ) {
      ctx.drawImage(res, sx, sy, sWidth, sHeight, x, y, width, height)
    } else {
      ctx.drawImage(res, x, y, width, height)
    }
  }

  return [res, error]
}

export default addImage
