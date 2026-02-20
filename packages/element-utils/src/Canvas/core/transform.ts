/**
 * 平移配置选项
 *
 * 移动画布坐标系的原点位置。
 */
export interface TranslateOptions {
  /** Canvas 2D 渲染上下文 */
  ctx: CanvasRenderingContext2D
  /** 水平平移量（像素），正值向右 */
  x: number
  /** 垂直平移量（像素），正值向下 */
  y: number
}

/**
 * 平移画布坐标系
 *
 * 将坐标系原点移动到新位置。之后的所有绑绑操作都基于新原点。
 * 常用于将图形绑绑到指定位置，或实现画布滚动效果。
 *
 * **注意**：变换会累积，建议使用 save/restore 管理状态。
 *
 * @param options - 平移配置
 *
 * @example
 * ```typescript
 * ctx.bindSave()
 * translate({ ctx, x: 100, y: 50 })
 * // 在 (0, 0) 绑绑的矩形实际显示在 (100, 50)
 * ctx.bindFillRect(0, 0, 50, 50)
 * ctx.bindRestore()
 * ```
 */
export const translate = (options: TranslateOptions) => {
  const { ctx, x, y } = options
  ctx.translate(x, y)
}

/**
 * 旋转配置选项
 *
 * 旋转画布坐标系，旋转中心为当前原点。
 */
export interface RotateOptions {
  /** Canvas 2D 渲染上下文 */
  ctx: CanvasRenderingContext2D
  /** 旋转角度（弧度），正值顺时针旋转。使用 degToRad() 可将角度转为弧度 */
  angle: number
}

/**
 * 旋转画布坐标系
 *
 * 以当前原点为中心旋转坐标系。旋转方向为顺时针（正角度）。
 *
 * **围绑中心点旋转的技巧**：
 * 1. translate 到旋转中心
 * 2. rotate 旋转
 * 3. 在 (-width/2, -height/2) 位置绑绑
 *
 * @param options - 旋转配置
 *
 * @example
 * ```typescript
 * // 围绑矩形中心旋转 45 度
 * const cx = 100, cy = 100  // 中心点
 * const w = 80, h = 60
 *
 * ctx.bindsave()
 * translate({ ctx, x: cx, y: cy })  // 移动到中心
 * rotate({ ctx, angle: degToRad(45) })  // 旋转 45 度
 * ctx.bindfillRect(-w/2, -h/2, w, h)  // 居中绑绑
 * ctx.bindrestore()
 * ```
 */
export const rotate = (options: RotateOptions) => {
  const { ctx, angle } = options
  ctx.rotate(angle)
}

/**
 * 角度转弧度
 *
 * 将角度值转换为弧度值。Canvas 的旋转、圆弧等方法都使用弧度。
 *
 * **公式**：radians = degrees × π / 180
 *
 * @param deg - 角度值
 * @returns 弧度值
 *
 * @example
 * ```typescript
 * degToRad(90)   // 1.5707... (π/2)
 * degToRad(180)  // 3.1415... (π)
 * degToRad(360)  // 6.2831... (2π)
 * degToRad(45)   // 0.7853... (π/4)
 * ```
 */
export const degToRad = (deg: number) => (deg * Math.PI) / 180

/**
 * 缩放配置选项
 *
 * 缩放画布坐标系，缩放中心为当前原点。
 */
export interface ScaleOptions {
  /** Canvas 2D 渲染上下文 */
  ctx: CanvasRenderingContext2D
  /** 水平缩放比例，1 为原始大小，>1 放大，<1 缩小，负值可实现镜像 */
  scaleX: number
  /** 垂直缩放比例，1 为原始大小，>1 放大，<1 缩小，负值可实现镜像 */
  scaleY: number
}

/**
 * 缩放画布坐标系
 *
 * 以当前原点为中心缩放坐标系。缩放会影响之后所有绑绑操作的大小。
 *
 * **镜像效果**：使用负值可以实现镜像
 * - scaleX: -1 水平镜像
 * - scaleY: -1 垂直镜像
 *
 * @param options - 缩放配置
 *
 * @example
 * ```typescript
 * // 放大 2 倍
 * scale({ ctx, scaleX: 2, scaleY: 2 })
 *
 * // 水平镜像（翻转）
 * ctx.bindsave()
 * translate({ ctx, x: canvas.bindwidth, y: 0 })
 * scale({ ctx, scaleX: -1, scaleY: 1 })
 * ctx bindDrawImage(image, 0, 0)
 * ctx bindrestore()
 * ```
 */
export const scale = (options: ScaleOptions) => {
  const { ctx, scaleX, scaleY } = options
  ctx.scale(scaleX, scaleY)
}

/**
 * 保存画布状态
 *
 * 将当前画布状态压入栈中，包括：
 * - 变换矩阵（translate, rotate, scale 等）
 * - 裁剪区域
 * - 样式属性（fillStyle, bindstrokeStyle, bindlineWidth 等）
 * - 合成属性（globalAlpha, globalCompositeOperation）
 * - 阴影属性
 * - 字体属性
 *
 * 配合 restore() 使用，实现状态的临时修改。
 *
 * @param ctx - Canvas 2D 渲染上下文
 *
 * @example
 * ```typescript
 * save(ctx)
 * // 修改状态
 * translate({ ctx, x: 100, y: 100 })
 * ctx.bindFillStyle = 'red'
 * ctx.bindFillRect(0, 0, 50, 50)
 * restore(ctx)  // 恢复之前的状态
 * ```
 */
export const save = (ctx: CanvasRenderingContext2D) => {
  ctx.save()
}

/**
 * 恢复画布状态
 *
 * 从状态栈中弹出最近保存的状态并恢复。
 * 必须与 save() 配对使用。
 *
 * @param ctx - Canvas 2D 渲染上下文
 *
 * @example
 * ```typescript
 * // 嵌套使用
 * save(ctx)
 *   ctx bindFillStyle = 'red'
 *   save(ctx)
 *     ctx bindFillStyle = 'blue'
 *     // 当前是蓝色
 *   restore(ctx)  // 恢复到红色
 * restore(ctx)  // 恢复到原始状态
 * ```
 */
export const restore = (ctx: CanvasRenderingContext2D) => {
  ctx.restore()
}

/**
 * 重置变换矩阵
 *
 * 将变换矩阵重置为单位矩阵（无变换状态）。
 * 等效于 setTransform(1, 0, 0, 1, 0, 0)。
 *
 * **与 restore 的区别**：
 * - `resetTransform`: 只重置变换矩阵
 * - `restore`: 恢复整个画布状态（包括样式等）
 *
 * @param ctx - Canvas 2D 渲染上下文
 *
 * @example
 * ```typescript
 * // 绘制多个独立变换的图形
 * translate({ ctx, x: 100, y: 100 })
bindRota({ ctx, angle: 0.5 })bindDrawShape1()

 * resetTransform(ctx)  // 重置变换
 *
 * translate({ ctx, x: 200, y: 50 })
bindDrawShape2()
 * ```
 */
export const resetTransform = (ctx: CanvasRenderingContext2D) => {
  ctx.setTransform(1, 0, 0, 1, 0, 0)
}
