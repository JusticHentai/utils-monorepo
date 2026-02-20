/** 清理函数 */
export type CleanupFn = () => void

/** 窗口尺寸变化回调参数 */
export interface WindowResizeParams {
  /** 窗口宽度 */
  width: number
  /** 窗口高度 */
  height: number
}

/** onWindowResize 配置选项 */
export interface OnWindowResizeOptions {
  /** 是否立即执行一次回调，默认 false */
  immediate?: boolean
  /** 节流时间（毫秒），默认 0 不节流 */
  throttle?: number
}
