import { ParseTimeResult } from './interface'

/**
 * 解析时间
 * @param time 时间戳
 */
const parseTime = (time: number): ParseTimeResult => {
  const date = new Date(time)

  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minutes = date.getMinutes()
  const second = date.getSeconds()

  return {
    time,
    year,
    month,
    day,
    hour,
    minutes,
    second,
  }
}

export default parseTime
