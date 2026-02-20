/**
 * 设置滤镜的配置项
 */
export interface SetFilterOptions {
  /** Canvas 2D 上下文 */
  ctx: CanvasRenderingContext2D
  /** CSS 滤镜字符串，如 'blur(5px)', 'grayscale(100%)', 多个滤镜用空格分隔 */
  filter: string
}

/**
 * 设置 CSS 滤镜
 *
 * 为后续绑制操作应用 CSS 滤镜效果，支持组合多个滤镜
 *
 * 可用滤镜：
 * - `blur(px)`: 模糊
 * - `brightness(%)`: 亮度，100% 为正常
 * - `contrast(%)`: 对比度，100% 为正常
 * - `grayscale(%)`: 灰度，0-100%
 * - `hue-rotate(deg)`: 色相旋转，0-360度
 * - `invert(%)`: 反色，0-100%
 * - `opacity(%)`: 透明度，0-100%
 * - `saturate(%)`: 饱和度，100% 为正常
 * - `sepia(%)`: 棕褐色（复古），0-100%
 * - `drop-shadow(x y blur color)`: 阴影
 *
 * @example
 * ```ts
 * // 单个滤镜
 * canvas.setFilter('blur(5px)')
 *
 * // 使用预设滤镜
 * canvas.setFilter(Canvas.filters.grayscale(100))
 *
 * // 组合多个滤镜
 * canvas.setFilter('grayscale(100%) contrast(150%)')
 *
 * // 绑制后清除
 * canvas.addImage({ ... })
 * canvas.clearFilter()
 * ```
 */
export const setFilter = (options: SetFilterOptions) => {
  const { ctx, filter } = options
  ctx.filter = filter
}

/**
 * 清除滤镜
 *
 * 重置滤镜为 'none'，后续绘制不应用滤镜效果
 */
export const clearFilter = (ctx: CanvasRenderingContext2D) => {
  ctx.filter = 'none'
}

/**
 * 预设滤镜函数
 *
 * 提供常用滤镜的便捷生成方法，返回滤镜字符串
 *
 * @example
 * ```ts
 * canvas.setFilter(Canvas.filters.blur(5))
 * canvas.setFilter(Canvas.filters.grayscale(100))
 * canvas.setFilter(Canvas.filters.brightness(120))
 *
 * // 组合使用
 * canvas.setFilter(`${Canvas.filters.grayscale(50)} ${Canvas.filters.contrast(120)}`)
 * ```
 */
export const filters = {
  /** 模糊效果 */
  blur: (px: number) => `blur(${px}px)`,
  /** 亮度调整 (0-200+, 100为正常) */
  brightness: (percent: number) => `brightness(${percent}%)`,
  /** 对比度调整 (0-200+, 100为正常) */
  contrast: (percent: number) => `contrast(${percent}%)`,
  /** 灰度转换 (0-100, 100为完全灰度) */
  grayscale: (percent: number) => `grayscale(${percent}%)`,
  /** 色相旋转 (0-360度) */
  hueRotate: (deg: number) => `hue-rotate(${deg}deg)`,
  /** 反色效果 (0-100) */
  invert: (percent: number) => `invert(${percent}%)`,
  /** 透明度 (0-100) */
  opacity: (percent: number) => `opacity(${percent}%)`,
  /** 饱和度调整 (0-200+, 100为正常) */
  saturate: (percent: number) => `saturate(${percent}%)`,
  /** 棕褐色/复古效果 (0-100) */
  sepia: (percent: number) => `sepia(${percent}%)`,
  /** 投影效果 */
  dropShadow: (x: number, y: number, blur: number, color: string) =>
    `drop-shadow(${x}px ${y}px ${blur}px ${color})`,
}
