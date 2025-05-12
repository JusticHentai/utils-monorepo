/**
 * 格式化时间戳为指定时区的日期时间字符串
 * @param ts - 时间戳（毫秒）
 * @param timezone - 时区标识符（默认'zh-CN'）
 * @returns 格式为YYYY.MM.DD HH:mm:ss的本地化时间字符串
 */
const getTimezone = (ts: number, timezone: Intl.LocalesArgument = 'zh-CN') => {
  const date = new Date(ts)

  return new Intl.DateTimeFormat(timezone, {
    year: 'numeric', // 四位数字年份
    month: '2-digit', // 两位数字月份（01-12）
    day: '2-digit', // 两位数字日期（01-31）
    hour: '2-digit', // 两位数字小时（00-23）
    minute: '2-digit', // 两位数字分钟（00-59）
    second: '2-digit', // 两位数字秒数（00-59）
    hour12: false, // 使用24小时制
  })
    .format(date)
    .replace(/\//g, '.') // 将日期分隔符从/替换为.
}

export default getTimezone
