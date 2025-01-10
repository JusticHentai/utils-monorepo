import Merge from './Merge'

/**
 * 初始化选项
 */
export interface Options {
  resizePreset?: ResizePreset
  resizeType?: ResizeType
  resizeCallback?: (options: ResizeCallback) => any
  fullScreen?: HTMLElement
  debounce?: {
    duration: number
    immediate?: boolean
  }
}

/**
 * 默认选项
 */
export interface DefaultOptions {
  resizePreset: ResizePreset
  resizeType: ResizeType
}

/**
 * 屏幕适配预设
 * 不同屏幕会有不同的适配标准 不可能平滑过渡 这里可以设置横屏和竖屏的适配比例
 * 单位 px
 * horizontal 横屏
 * vertical 竖屏
 * 当横竖屏只填入任意一种时 仅适配当前填入的
 * 当填入两种时 当前屏幕 按当前屏幕 width > height 区分是横屏还是竖屏
 */
export type ResizePreset =
  | {
      horizontal: ScreenInfo
      vertical: ScreenInfo
    }
  | {
      horizontal: ScreenInfo
      vertical?: ScreenInfo
    }
  | {
      horizontal?: ScreenInfo
      vertical: ScreenInfo
    }

/**
 * 屏幕信息
 * width 宽度
 * height 高度
 */
export interface ScreenInfo {
  width: number
  height: number
}

/**
 * 适配规则
 * x 表示只按 resizePreset 的 width 与当前屏幕 width 的比例来适配
 * y 表示只按 resizePreset 的 height 与当前屏幕 height 的比例来适配
 * all 表示按 resizePreset 的 width height 与当前屏幕 width height 两者比例最小值来适配
 * 为了让大屏有更好的呈现方式 当 resizePreset 的值小于当前屏幕的对应值 比例默认是 1
 * 如果想自定义大屏 可以按比例提高 resizePreset 的值
 */
export type ResizeType = 'x' | 'y' | 'all'

/**
 * 每次 resize 时回调
 * width 当前屏幕宽度 px
 * height 当前屏幕高度 px
 * size 表示当前屏幕是横屏模式还是竖屏模式 也是按当前屏幕的 width > height 区分
 */
export type ResizeCallback = {
  size: 'horizontal' | 'vertical'
  ratio: number
} & ScreenInfo &
  Options

/**
 * 内部选项
 */
export type InnerOptions = Merge<Options, DefaultOptions> & {
  [key: string]: any
}
