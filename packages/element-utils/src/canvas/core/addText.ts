export interface AddTextOptions {
  text: string
  x: number
  y: number
  width: number
  lineHeight: number
  font: string
  fontSize: number
  fontWeight: number
  color: string
  ctx: CanvasRenderingContext2D
}

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
