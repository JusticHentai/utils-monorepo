/**
 * 时间格式化函数
 * @param ts 时间戳（秒级）
 * @returns 数字数组格式的时间 [时, 分, 秒]
 * 示例：126秒 → [0, 0, 0, 2, 0, 6] 表示 00:02:06
 */
const formatTime = (ts: number) => {
  // 计算小时、分钟、秒数
  const hours = Math.floor(ts / 3600)
  const minutes = Math.floor((ts % 3600) / 60)
  const seconds = ts % 60

  // 格式化为两位数并截取最后两位（处理24小时以上情况）
  const hh = String(hours).padStart(2, '0').slice(-2)
  const mm = String(minutes).padStart(2, '0')
  const ss = String(seconds).padStart(2, '0')

  // 组合成HHMMSS格式并转换为数字数组
  return (hh + mm + ss).split('').map(Number)
}

export default formatTime
