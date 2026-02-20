/**
 * 倒计时参数
 */
export interface CountdownOptions {
  /** 结束时间戳（秒级） */
  endTs: number
  /** 每秒触发的回调函数，参数为剩余秒数 */
  cb: (remaining: number) => void
}

/**
 * 倒计时清除定时器函数
 */
export type CountdownResult = () => void
