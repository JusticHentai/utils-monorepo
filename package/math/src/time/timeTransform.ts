/**
 * Time 获取时间 返回结果类型
 */
export interface TimeResult {
  year: number // 年
  month: number // 月
  day: number // 日
  hour: number // 小时
  minutes: number // 分钟
  second: number // 秒
  time: number // 时间戳
}

/**
 * 格式化时间
 * @param time 时间戳
 */
export default function timeTransform(time: number): TimeResult {
  const date = new Date(time)

  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minutes = date.getMinutes()
  const second = date.getSeconds()

  return {
    year,
    month,
    day,
    hour,
    minutes,
    second,
    time,
  }
}
