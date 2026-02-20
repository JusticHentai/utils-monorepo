/**
 * 路径命令
 */
export interface PathCommand {
  /** 命令类型：moveTo(移动) | lineTo(画线) | closePath(闭合) */
  type: 'moveTo' | 'lineTo' | 'closePath'
  /** x 坐标（closePath 时不需要） */
  x?: number
  /** y 坐标（closePath 时不需要） */
  y?: number
}

/**
 * 绘制自由路径的配置项
 */
export interface AddPathOptions {
  /** Canvas 2D 上下文 */
  ctx: CanvasRenderingContext2D
  /** 路径命令数组 */
  commands: PathCommand[]
  /** 填充颜色 */
  fillColor?: string
  /** 描边颜色 */
  strokeColor?: string
  /** 线条宽度 */
  lineWidth?: number
}

/**
 * 绘制自由路径
 *
 * 通过路径命令数组定义任意形状，适合绘制不规则图形
 *
 * 命令类型：
 * - `moveTo`: 移动画笔到指定位置（不画线）
 * - `lineTo`: 从当前位置画线到指定位置
 * - `closePath`: 闭合路径（连接到起点）
 *
 * @example
 * ```ts
 * // 绘制三角形
 * canvas.addPath({
 *   commands: [
 *     { type: 'moveTo', x: 100, y: 20 },
 *     { type: 'lineTo', x: 150, y: 100 },
 *     { type: 'lineTo', x: 50, y: 100 },
 *     { type: 'closePath' }
 *   ],
 *   fillColor: '#3498db'
 * })
 *
 * // 绘制箭头
 * canvas.addPath({
 *   commands: [
 *     { type: 'moveTo', x: 50, y: 150 },
 *     { type: 'lineTo', x: 150, y: 150 },
 *     { type: 'lineTo', x: 130, y: 130 },
 *     { type: 'moveTo', x: 150, y: 150 },
 *     { type: 'lineTo', x: 130, y: 170 }
 *   ],
 *   strokeColor: '#e74c3c', lineWidth: 3
 * })
 * ```
 */
const addPath = (options: AddPathOptions) => {
  const { ctx, commands, fillColor, strokeColor, lineWidth = 1 } = options

  ctx.beginPath()

  commands.forEach((cmd) => {
    switch (cmd.type) {
      case 'moveTo':
        ctx.moveTo(cmd.x ?? 0, cmd.y ?? 0)
        break
      case 'lineTo':
        ctx.lineTo(cmd.x ?? 0, cmd.y ?? 0)
        break
      case 'closePath':
        ctx.closePath()
        break
    }
  })

  if (fillColor) {
    ctx.fillStyle = fillColor
    ctx.fill()
  }

  if (strokeColor) {
    ctx.strokeStyle = strokeColor
    ctx.lineWidth = lineWidth
    ctx.stroke()
  }
}

export default addPath
