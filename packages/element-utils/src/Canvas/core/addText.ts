/**
 * 绘制文本的配置项
 */
export interface AddTextOptions {
  /** 文本内容 */
  text: string
  /** 起始 x 坐标 */
  x: number
  /** 起始 y 坐标 */
  y: number
  /** 文本区域最大宽度，超出自动换行 */
  width: number
  /** 行高（像素） */
  lineHeight: number
  /** 字体名称 */
  font: string
  /** 字体大小（像素） */
  fontSize: number
  /** 字重（100-900 或 normal/bold） */
  fontWeight: number
  /** 文本颜色 */
  color: string
  /** Canvas 2D 上下文 */
  ctx: CanvasRenderingContext2D
}

/**
 * 绘制文本（支持自动换行）
 *
 * 在指定区域内绘制文本，超出宽度自动换行
 * 适合绘制段落、多行文本
 *
 * 与 fillText 的区别：
 * - addText：支持自动换行，适合段落
 * - fillText：单行文本，不换行
 *
 * @example
 * ```ts
 * canvas.addText({
 *   text: '这是一段很长的文本，会自动换行显示在指定宽度内',
 *   x: 20, y: 20,
 *   width: 200,       // 最大宽度
 *   lineHeight: 24,   // 行高
 *   font: 'Arial',
 *   fontSize: 14,
 *   fontWeight: 400,
 *   color: '#333'
 * })
 * ```
 */

const addText = (options: AddTextOptions) => {
  const {
    text,
    x,
    y,
    width,
    lineHeight,
    font,
    fontSize,
    fontWeight,
    color,
    ctx,
  } = options

  ctx.font = `${fontWeight} ${fontSize}px ${font}`
  ctx.fillStyle = color

  // 换行处理
  const textArr = text.split('')
  let lineCount = 0
  let currentLineCount = 0
  for (let i = 0; i < textArr.length; i++) {
    const textLine = textArr.slice(currentLineCount, i + 1).join('')

    if (ctx.measureText(textLine).width <= width) {
      // 无需换行
      continue
    } else {
      // 需要换行
      ctx.fillText(textLine, x, y + lineCount * lineHeight)
      lineCount++
      currentLineCount = i + 1
    }
  }

  // 最后一行
  ctx.fillText(
    textArr.slice(currentLineCount).join(''),
    x,
    y + lineCount * lineHeight
  )
}

export default addText
