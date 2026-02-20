/**
 * 测量文本的配置项
 */
export interface MeasureTextOptions {
  /** 要测量的文本 */
  text: string
  /** 字体大小，默认 14 */
  fontSize?: number
  /** 字体名称，默认 'Arial' */
  font?: string
  /** 字重，默认 400 */
  fontWeight?: number | string
  /** Canvas 2D 上下文 */
  ctx: CanvasRenderingContext2D
}

/**
 * 文本测量结果
 */
export interface TextMetricsResult {
  /** 文本渲染宽度（像素） */
  width: number
  /** 原始 TextMetrics 对象，包含更多详细信息 */
  metrics: TextMetrics
}

/**
 * 测量文本宽度
 *
 * 在绑制前计算文本的渲染宽度，用于布局计算、文本截断、居中对齐等
 * 测量后会恢复原有字体设置，不影响后续绑制
 *
 * @returns 包含 width 和原始 metrics 的结果对象
 *
 * @example
 * ```ts
 * // 基础测量
 * const { width } = canvas.measureText({ text: 'Hello World' })
 * console.log(`文本宽度: ${width}px`)
 *
 * // 指定字体测量
 * const result = canvas.measureText({
 *   text: '测试文本',
 *   fontSize: 24,
 *   font: 'Arial',
 *   fontWeight: 'bold'
 * })
 *
 * // 居中绘制
 * const { width } = canvas.measureText({ text: '居中文本', fontSize: 20 })
 * canvas.fillText({
 *   text: '居中文本',
 *   x: (canvasWidth - width) / 2,
 *   y: 50,
 *   fontSize: 20
 * })
 * ```
 */
const measureText = (options: MeasureTextOptions): TextMetricsResult => {
  const {
    text,
    fontSize = 14,
    font = 'Arial',
    fontWeight = 400,
    ctx,
  } = options

  // 保存当前字体设置
  const originalFont = ctx.font

  // 设置字体
  ctx.font = `${fontWeight} ${fontSize}px ${font}`

  // 测量文本
  const metrics = ctx.measureText(text)

  // 恢复原字体
  ctx.font = originalFont

  return {
    width: metrics.width,
    metrics,
  }
}

export default measureText
