/**
 * 填充文本的配置项
 */
export interface FillTextOptions {
  /** Canvas 2D 上下文 */
  ctx: CanvasRenderingContext2D
  /** 文本内容 */
  text: string
  /** x 坐标 */
  x: number
  /** y 坐标 */
  y: number
  /** 字体大小，默认 14 */
  fontSize?: number
  /** 字体名称，默认 'sans-serif' */
  font?: string
  /** 字重，默认 400 */
  fontWeight?: number | string
  /** 填充颜色，默认 '#000' */
  color?: string
  /** 水平对齐方式，默认 'left' */
  textAlign?: CanvasTextAlign
  /** 文本基线，默认 'top' */
  textBaseline?: CanvasTextBaseline
  /** 最大宽度（超出会压缩） */
  maxWidth?: number
}

/**
 * 简单文本填充（无自动换行）
 *
 * 快速绘制单行文本，适合标签、标题等简短内容
 * 如需自动换行，请使用 addText
 *
 * textAlign 对齐说明：
 * - 'left': x 为文本左边缘
 * - 'center': x 为文本中心
 * - 'right': x 为文本右边缘
 *
 * @example
 * ```ts
 * // 基础用法
 * canvas.fillText({ text: 'Hello', x: 20, y: 20 })
 *
 * // 自定义样式
 * canvas.fillText({
 *   text: '标题文本',
 *   x: 100, y: 50,
 *   fontSize: 24, fontWeight: 'bold',
 *   color: '#3498db', textAlign: 'center'
 * })
 * ```
 */
export const fillText = (options: FillTextOptions) => {
  const {
    ctx,
    text,
    x,
    y,
    fontSize = 14,
    font = 'sans-serif',
    fontWeight = 400,
    color = '#000',
    textAlign = 'left',
    textBaseline = 'top',
    maxWidth,
  } = options

  ctx.font = `${fontWeight} ${fontSize}px ${font}`
  ctx.fillStyle = color
  ctx.textAlign = textAlign
  ctx.textBaseline = textBaseline

  if (maxWidth !== undefined) {
    ctx.fillText(text, x, y, maxWidth)
  } else {
    ctx.fillText(text, x, y)
  }
}

/**
 * 描边文本的配置项
 */
export interface StrokeTextOptions {
  /** Canvas 2D 上下文 */
  ctx: CanvasRenderingContext2D
  /** 文本内容 */
  text: string
  /** x 坐标 */
  x: number
  /** y 坐标 */
  y: number
  /** 字体大小，默认 14 */
  fontSize?: number
  /** 字体名称，默认 'sans-serif' */
  font?: string
  /** 字重，默认 400 */
  fontWeight?: number | string
  /** 描边颜色，默认 '#000' */
  color?: string
  /** 描边线宽，默认 1 */
  lineWidth?: number
  /** 水平对齐方式，默认 'left' */
  textAlign?: CanvasTextAlign
  /** 文本基线，默认 'top' */
  textBaseline?: CanvasTextBaseline
  /** 最大宽度（超出会压缩） */
  maxWidth?: number
}

/**
 * 描边文本（空心字）
 *
 * 绘制文本轮廓，不填充内部，常用于装饰性文字
 *
 * @example
 * ```ts
 * // 空心字
 * canvas.strokeText({
 *   text: 'HELLO',
 *   x: 50, y: 50,
 *   fontSize: 48, color: '#e74c3c', lineWidth: 2
 * })
 *
 * // 配合 fillText 创建描边+填充效果
 * canvas.strokeText({ text: 'TEXT', x: 50, y: 120, fontSize: 36, color: '#333', lineWidth: 3 })
 * canvas.fillText({ text: 'TEXT', x: 50, y: 120, fontSize: 36, color: '#fff' })
 * ```
 */
export const strokeText = (options: StrokeTextOptions) => {
  const {
    ctx,
    text,
    x,
    y,
    fontSize = 14,
    font = 'sans-serif',
    fontWeight = 400,
    color = '#000',
    lineWidth = 1,
    textAlign = 'left',
    textBaseline = 'top',
    maxWidth,
  } = options

  ctx.font = `${fontWeight} ${fontSize}px ${font}`
  ctx.strokeStyle = color
  ctx.lineWidth = lineWidth
  ctx.textAlign = textAlign
  ctx.textBaseline = textBaseline

  if (maxWidth !== undefined) {
    ctx.strokeText(text, x, y, maxWidth)
  } else {
    ctx.strokeText(text, x, y)
  }
}
