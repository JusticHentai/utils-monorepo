import { CountdownOptions, CountdownResult } from './interface'

/**
 * 倒计时回调函数，适用于每秒触发的场景
 * 例如 17:58:40 这种倒计时
 */
const countdown = ({ endTs, cb }: CountdownOptions): CountdownResult => {
  // 计算剩余时间（秒）
  const getRemaining = () => {
    const now = Math.floor(Date.now() / 1000) // 获取当前时间戳（秒）
    return Math.max(endTs - now, 0) // 确保剩余时间不小于0
  }

  /** 触发第一次回调 */
  cb(getRemaining())

  /** 设置定时器 */
  const timer = setInterval(() => {
    /** 计算剩余时间 */
    const remaining = getRemaining()
    cb(remaining)

    /** 剩余时间小于等于 0，清除定时器 */
    if (remaining <= 0) {
      clearInterval(timer)
    }
  }, 1000)

  /** 返回清除定时器函数 */
  return () => clearInterval(timer)
}

export default countdown
