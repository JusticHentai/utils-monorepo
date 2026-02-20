/**
 * 简化版日期工具，替代 dayjs
 * 仅实现组件需要的核心功能
 */

export type DateUnit =
  | 'year'
  | 'month'
  | 'day'
  | 'hour'
  | 'minute'
  | 'second'
  | 'millisecond'
export type WeekDay = 0 | 1 | 2 | 3 | 4 | 5 | 6

const WEEK_DAYS = ['日', '一', '二', '三', '四', '五', '六']
const MONTHS = [
  '一月',
  '二月',
  '三月',
  '四月',
  '五月',
  '六月',
  '七月',
  '八月',
  '九月',
  '十月',
  '十一月',
  '十二月',
]

function padZero(n: number, length = 2): string {
  return String(n).padStart(length, '0')
}

export function toDate(value?: Date | number | string): Date {
  if (value instanceof Date) return new Date(value.getTime())
  if (typeof value === 'number') return new Date(value)
  if (typeof value === 'string') return new Date(value)
  return new Date()
}

export function getYear(date: Date): number {
  return date.getFullYear()
}

export function getMonth(date: Date): number {
  return date.getMonth()
}

export function getDay(date: Date): number {
  return date.getDate()
}

export function getHour(date: Date): number {
  return date.getHours()
}

export function getMinute(date: Date): number {
  return date.getMinutes()
}

export function getSecond(date: Date): number {
  return date.getSeconds()
}

export function getWeekDay(date: Date): WeekDay {
  return date.getDay() as WeekDay
}

/** 获取某月天数 */
export function getDaysInMonth(year: number, month: number): number {
  return new Date(year, month + 1, 0).getDate()
}

/** 获取某月第一天是星期几 */
export function getFirstDayOfMonth(year: number, month: number): WeekDay {
  return new Date(year, month, 1).getDay() as WeekDay
}

/** 设置日期某个单位 */
export function setDate(date: Date, unit: DateUnit, value: number): Date {
  const d = new Date(date.getTime())
  switch (unit) {
    case 'year':
      d.setFullYear(value)
      break
    case 'month':
      d.setMonth(value)
      break
    case 'day':
      d.setDate(value)
      break
    case 'hour':
      d.setHours(value)
      break
    case 'minute':
      d.setMinutes(value)
      break
    case 'second':
      d.setSeconds(value)
      break
    case 'millisecond':
      d.setMilliseconds(value)
      break
  }
  return d
}

/** 增加日期 */
export function addDate(date: Date, amount: number, unit: DateUnit): Date {
  const d = new Date(date.getTime())
  switch (unit) {
    case 'year':
      d.setFullYear(d.getFullYear() + amount)
      break
    case 'month':
      d.setMonth(d.getMonth() + amount)
      break
    case 'day':
      d.setDate(d.getDate() + amount)
      break
    case 'hour':
      d.setHours(d.getHours() + amount)
      break
    case 'minute':
      d.setMinutes(d.getMinutes() + amount)
      break
    case 'second':
      d.setSeconds(d.getSeconds() + amount)
      break
    case 'millisecond':
      d.setMilliseconds(d.getMilliseconds() + amount)
      break
  }
  return d
}

/** 比较两个日期是否同一天 */
export function isSameDay(a: Date, b: Date): boolean {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  )
}

/** 比较两个日期是否同一月 */
export function isSameMonth(a: Date, b: Date): boolean {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth()
}

/** 比较两个日期是否同一年 */
export function isSameYear(a: Date, b: Date): boolean {
  return a.getFullYear() === b.getFullYear()
}

/** 日期a是否在日期b之前 */
export function isBefore(a: Date, b: Date): boolean {
  return a.getTime() < b.getTime()
}

/** 日期a是否在日期b之后 */
export function isAfter(a: Date, b: Date): boolean {
  return a.getTime() > b.getTime()
}

/** 获取一天的开始（00:00:00） */
export function startOfDay(date: Date): Date {
  const d = new Date(date.getTime())
  d.setHours(0, 0, 0, 0)
  return d
}

/** 获取一天的结束（23:59:59） */
export function endOfDay(date: Date): Date {
  const d = new Date(date.getTime())
  d.setHours(23, 59, 59, 999)
  return d
}

/** 获取一月的开始 */
export function startOfMonth(date: Date): Date {
  return new Date(date.getFullYear(), date.getMonth(), 1)
}

/** 获取一月的结束 */
export function endOfMonth(date: Date): Date {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0, 23, 59, 59, 999)
}

/** 获取一年的开始 */
export function startOfYear(date: Date): Date {
  return new Date(date.getFullYear(), 0, 1)
}

/** 获取一周的开始 */
export function startOfWeek(date: Date, weekStart: WeekDay = 0): Date {
  const d = new Date(date.getTime())
  const day = d.getDay()
  const diff = (day - weekStart + 7) % 7
  d.setDate(d.getDate() - diff)
  d.setHours(0, 0, 0, 0)
  return d
}

/** 获取季度 */
export function getQuarter(date: Date): number {
  return Math.floor(date.getMonth() / 3) + 1
}

/** 获取一季度的开始月份 */
export function startOfQuarter(date: Date): Date {
  const q = getQuarter(date)
  return new Date(date.getFullYear(), (q - 1) * 3, 1)
}

/** 日期格式化 */
export function formatDate(date: Date, format = 'YYYY-MM-DD'): string {
  const tokens: Record<string, string> = {
    YYYY: String(date.getFullYear()),
    MM: padZero(date.getMonth() + 1),
    DD: padZero(date.getDate()),
    HH: padZero(date.getHours()),
    mm: padZero(date.getMinutes()),
    ss: padZero(date.getSeconds()),
    SSS: padZero(date.getMilliseconds(), 3),
    M: String(date.getMonth() + 1),
    D: String(date.getDate()),
    H: String(date.getHours()),
    h: String(date.getHours() % 12 || 12),
    m: String(date.getMinutes()),
    s: String(date.getSeconds()),
    A: date.getHours() < 12 ? 'AM' : 'PM',
    a: date.getHours() < 12 ? 'am' : 'pm',
    d: String(date.getDay()),
    dd: WEEK_DAYS[date.getDay()],
  }

  let result = format
  // 按 token 长度倒序替换，避免短 token 误匹配
  const sortedKeys = Object.keys(tokens).sort((a, b) => b.length - a.length)
  for (const key of sortedKeys) {
    result = result.replace(new RegExp(key, 'g'), tokens[key])
  }
  return result
}

/** 解析日期字符串 */
export function parseDate(str: string, _format = 'YYYY-MM-DD'): Date | null {
  if (!str) return null
  const d = new Date(str)
  if (!isNaN(d.getTime())) return d
  return null
}

/** 获取12个月的名称 */
export function getMonthNames(): string[] {
  return [...MONTHS]
}

/** 获取星期名称 */
export function getWeekDayNames(weekStart: WeekDay = 0): string[] {
  const days = [...WEEK_DAYS]
  return [...days.slice(weekStart), ...days.slice(0, weekStart)]
}

/** 生成日历面板数据（6行7列的日期数组） */
export function getCalendarDates(
  year: number,
  month: number,
  weekStart: WeekDay = 0
): Date[] {
  const firstDay = new Date(year, month, 1)
  const start = startOfWeek(firstDay, weekStart)
  const dates: Date[] = []
  for (let i = 0; i < 42; i++) {
    dates.push(addDate(start, i, 'day'))
  }
  return dates
}

/** 生成时间列表（如 0-23 小时） */
export function getTimeList(count: number, step = 1): number[] {
  const list: number[] = []
  for (let i = 0; i < count; i += step) {
    list.push(i)
  }
  return list
}

/** 克隆日期 */
export function cloneDate(date: Date): Date {
  return new Date(date.getTime())
}
