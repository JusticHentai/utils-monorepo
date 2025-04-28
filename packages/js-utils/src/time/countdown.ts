/**
 * 倒计时定时器
 * @param endTs 结束时间戳（秒级）
 * @param cb 每秒触发的回调函数，参数为剩余秒数
 * @returns 清除定时器的函数
 */
const countdown = (
  endTs: number,
  cb: (...params: any[]) => void
): (() => void) => {
  // 计算剩余时间（秒）
  const getRemaining = () => {
    const now = Math.floor(Date.now() / 1000) // 获取当前时间戳（秒）
    return Math.max(endTs - now, 0) // 确保剩余时间不小于0
  }

  cb(getRemaining())

  const timer = setInterval(() => {
    const remaining = getRemaining()
    cb(remaining)

    if (remaining <= 0) {
      clearInterval(timer)
    }
  }, 1000)

  return () => clearInterval(timer)
}

export default countdown
