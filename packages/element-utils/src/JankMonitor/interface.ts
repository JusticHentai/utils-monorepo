/** 默认卡顿阈值（毫秒） */
export const DEFAULT_JANK_THRESHOLD = 100

/** 卡顿信息 */
export interface JankInfo {
  /** 卡顿持续时间（ms） */
  duration: number
  /** 卡顿发生时间戳 */
  timestamp: number
}

/** 卡顿回调函数类型 */
export type JankCallback = (jank: JankInfo) => void

/** onJank 配置选项 */
export interface OnJankOptions {
  /** 卡顿阈值（ms），默认 100ms */
  threshold?: number
}

/** 停止监听函数类型 */
export type StopListening = () => void
