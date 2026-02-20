import loadImage from '../../loadImage'

/**
 * 绘制裁剪图片的配置项
 */
export interface AddClipImageOptions {
  /** 图片 URL */
  url: string
  /** 图片绘制 x 坐标 */
  x: number
  /** 图片绘制 y 坐标 */
  y: number
  /** 图片宽度 */
  width: number
  /** 图片高度 */
  height: number
  /** Canvas 2D 上下文 */
  ctx: CanvasRenderingContext2D
  /** 裁剪形状：circle(圆形) | roundRect(圆角矩形) */
  clipType: 'circle' | 'roundRect'
  /** 圆角半径，clipType 为 roundRect 时生效，可以是单个数值或 [左上, 右上, 右下, 左下] */
  radius?: number | [number, number, number, number]
}

/**
 * 绘制裁剪图片（圆形或圆角矩形）
 *
 * 自动加载图片并应用裁剪蒙版，常用于头像、卡片封面等场景
 *
 * 裁剪类型：
 * - `circle`: 圆形裁剪，自动居中，半径取宽高最小值的一半
 * - `roundRect`: 圆角矩形裁剪，支持统一圆角或四角独立设置
 *
 * @example
 * ```ts
 * // 圆形头像
 * await canvas.addClipImage({
 *   url: '/avatar.png',
 *   x: 20, y: 20, width: 80, height: 80,
 *   clipType: 'circle'
 * })
 *
 * // 圆角卡片封面
 * await canvas.addClipImage({
 *   url: '/cover.png',
 *   x: 120, y: 20, width: 150, height: 100,
 *   clipType: 'roundRect', radius: 12
 * })
 *
 * // 四角独立圆角
 * await canvas.addClipImage({
 *   url: '/image.png',
 *   x: 290, y: 20, width: 100, height: 100,
 *   clipType: 'roundRect', radius: [20, 5, 20, 5]
 * })
 * ```
 */
const addClipImage = async (options: AddClipImageOptions) => {
  const { url, x, y, width, height, ctx, clipType, radius = 0 } = options

  const [res, error] = await loadImage(url)

  if (error || !res) {
    return [res, error]
  }

  ctx.save()
  ctx.beginPath()

  if (clipType === 'circle') {
    // 圆形裁剪
    const centerX = x + width / 2
    const centerY = y + height / 2
    const r = Math.min(width, height) / 2
    ctx.arc(centerX, centerY, r, 0, Math.PI * 2)
  } else if (clipType === 'roundRect') {
    // 圆角矩形裁剪
    const [tl, tr, br, bl] = Array.isArray(radius)
      ? radius
      : [radius, radius, radius, radius]

    ctx.moveTo(x + tl, y)
    ctx.lineTo(x + width - tr, y)
    ctx.arcTo(x + width, y, x + width, y + tr, tr)
    ctx.lineTo(x + width, y + height - br)
    ctx.arcTo(x + width, y + height, x + width - br, y + height, br)
    ctx.lineTo(x + bl, y + height)
    ctx.arcTo(x, y + height, x, y + height - bl, bl)
    ctx.lineTo(x, y + tl)
    ctx.arcTo(x, y, x + tl, y, tl)
  }

  ctx.closePath()
  ctx.clip()

  ctx.drawImage(res, x, y, width, height)
  ctx.restore()
}

export default addClipImage
