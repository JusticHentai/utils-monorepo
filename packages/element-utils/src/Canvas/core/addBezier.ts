/**
 * 绘制三次贝塞尔曲线的配置项
 */
export interface AddBezierOptions {
  /** 起点 x */
  x1: number
  /** 起点 y */
  y1: number
  /** 控制点1 x */
  cp1x: number
  /** 控制点1 y */
  cp1y: number
  /** 控制点2 x */
  cp2x: number
  /** 控制点2 y */
  cp2y: number
  /** 终点 x */
  x2: number
  /** 终点 y */
  y2: number
  /** 线条颜色 */
  color?: string
  /** 线宽 */
  lineWidth?: number
  /** 线帽样式 */
  lineCap?: CanvasLineCap
  /** Canvas 2D 上下文 */
  ctx: CanvasRenderingContext2D
}

/**
 * 绘制三次贝塞尔曲线
 *
 * 三次贝塞尔曲线由起点、终点和两个控制点定义，可创建平滑的 S 形曲线
 * 曲线从起点出发，向控制点1方向弯曲，再向控制点2方向调整，最终到达终点
 *
 * 应用场景：
 * - 绘制平滑曲线、波浪线
 * - 动画路径
 * - 矢量图形轮廓
 *
 * @example
 * ```ts
 * // 绘制 S 形曲线
 * canvas.addBezier({
 *   x1: 50, y1: 100,      // 起点
 *   cp1x: 100, cp1y: 50,  // 控制点1
 *   cp2x: 150, cp2y: 150, // 控制点2
 *   x2: 200, y2: 100,     // 终点
 *   color: '#9b59b6', lineWidth: 3
 * })
 * ```
 */
const addBezier = (options: AddBezierOptions) => {
  const {
    x1,
    y1,
    cp1x,
    cp1y,
    cp2x,
    cp2y,
    x2,
    y2,
    color = '#000',
    lineWidth = 1,
    lineCap = 'butt',
    ctx,
  } = options

  ctx.beginPath()
  ctx.moveTo(x1, y1)
  ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x2, y2)

  ctx.strokeStyle = color
  ctx.lineWidth = lineWidth
  ctx.lineCap = lineCap
  ctx.stroke()
}

export default addBezier
