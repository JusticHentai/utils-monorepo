/**
 * 绘制二次贝塞尔曲线的配置项
 */
export interface AddQuadraticOptions {
  /** 起点 x */
  x1: number
  /** 起点 y */
  y1: number
  /** 控制点 x */
  cpx: number
  /** 控制点 y */
  cpy: number
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
 * 绘制二次贝塞尔曲线
 *
 * 二次贝塞尔曲线由起点、终点和一个控制点定义，比三次贝塞尔曲线更简单
 * 曲线从起点出发，向控制点方向弯曲，然后到达终点
 *
 * 与三次贝塞尔曲线的区别：
 * - 二次：1个控制点，适合简单弧线
 * - 三次：2个控制点，可创建 S 形曲线
 *
 * @example
 * ```ts
 * // 简单弧线
 * canvas.addQuadratic({
 *   x1: 50, y1: 100,    // 起点
 *   cpx: 125, cpy: 20,  // 控制点（曲线向上弯曲）
 *   x2: 200, y2: 100,   // 终点
 *   color: '#3498db', lineWidth: 2
 * })
 *
 * // 向下弯曲的弧线
 * canvas.addQuadratic({
 *   x1: 50, y1: 150,
 *   cpx: 125, cpy: 230, // 控制点在下方
 *   x2: 200, y2: 150,
 *   color: '#e74c3c', lineWidth: 2
 * })
 * ```
 */
const addQuadratic = (options: AddQuadraticOptions) => {
  const {
    x1,
    y1,
    cpx,
    cpy,
    x2,
    y2,
    color = '#000',
    lineWidth = 1,
    lineCap = 'butt',
    ctx,
  } = options

  ctx.beginPath()
  ctx.moveTo(x1, y1)
  ctx.quadraticCurveTo(cpx, cpy, x2, y2)

  ctx.strokeStyle = color
  ctx.lineWidth = lineWidth
  ctx.lineCap = lineCap
  ctx.stroke()
}

export default addQuadratic
