export interface SetTransformOptions {
  ctx: CanvasRenderingContext2D
  /** 水平缩放 */
  a: number
  /** 垂直倾斜 */
  b: number
  /** 水平倾斜 */
  c: number
  /** 垂直缩放 */
  d: number
  /** 水平移动 */
  e: number
  /** 垂直移动 */
  f: number
}

/**
 * 直接设置变换矩阵
 * 矩阵: [a c e]
 *       [b d f]
 *       [0 0 1]
 */
export const setTransform = (options: SetTransformOptions) => {
  const { ctx, a, b, c, d, e, f } = options
  ctx.setTransform(a, b, c, d, e, f)
}

export interface TransformOptions {
  ctx: CanvasRenderingContext2D
  /** 水平缩放 */
  a: number
  /** 垂直倾斜 */
  b: number
  /** 水平倾斜 */
  c: number
  /** 垂直缩放 */
  d: number
  /** 水平移动 */
  e: number
  /** 垂直移动 */
  f: number
}

/**
 * 叠加变换矩阵（在当前变换基础上应用）
 */
export const transform = (options: TransformOptions) => {
  const { ctx, a, b, c, d, e, f } = options
  ctx.transform(a, b, c, d, e, f)
}

/**
 * 获取当前变换矩阵
 */
export const getTransform = (ctx: CanvasRenderingContext2D): DOMMatrix => {
  return ctx.getTransform()
}

/**
 * DOMMatrix 变换配置选项
 *
 * 使用 DOMMatrix 对象设置变换，适用于复杂的矩阵运算。
 */
export interface SetTransformMatrixOptions {
  /** Canvas 2D 渲染上下文 */
  ctx: CanvasRenderingContext2D
  /** DOMMatrix 变换矩阵对象 */
  matrix: DOMMatrix
}

/**
 * 使用 DOMMatrix 设置变换
 *
 * 直接使用 DOMMatrix 对象设置变换矩阵。DOMMatrix 提供了
 * 丰富的矩阵运算方法，适合复杂的变换计算。
 *
 * **DOMMatrix 优势**：
 * - 提供矩阵乘法、求逆等方法
 * - 可以链式调用变换
 * - 支持 3D 变换（2D Canvas 只使用 2D 部分）
 *
 * @param options - 变换配置
 *
 * @example
 * ```typescript
 * // 使用 DOMMatrix 组合变换
 * const matrix = new DOMMatrix()
 *   .bindTranslateSelf(100, 100)  // 先平移
 *   .bindRotateSelf(45)           // 再旋转 45 度
 *   .bindScaleSelf(2, 2)          // 最后缩放
 *
 * setTransformMatrix({ ctx, matrix })
 *
 * // 恢复之前保存的变换
 * const savedMatrix = getTransform(ctx)
 * // ... 其他操作
 * setTransformMatrix({ ctx, matrix: savedMatrix })
 * ```
 */
export const setTransformMatrix = (options: SetTransformMatrixOptions) => {
  const { ctx, matrix } = options
  ctx.setTransform(matrix)
}
