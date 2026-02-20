/**
 * 将秒数转换为时分秒数字数组
 * @param seconds 秒数
 * @returns 数字数组格式的时间 [时, 分, 秒]
 * 示例：126秒 → [0, 0, 0, 2, 0, 6] 表示 00:02:06
 */
const secondsToHHMMSS = (seconds: number) => {
  const hours = Math.floor(seconds / 3600)
  const minutes = Math.floor((seconds % 3600) / 60)
  const secs = seconds % 60

  const hh = String(hours).padStart(2, '0').slice(-2)
  const mm = String(minutes).padStart(2, '0')
  const ss = String(secs).padStart(2, '0')

  return (hh + mm + ss).split('').map(Number)
}

export default secondsToHHMMSS
