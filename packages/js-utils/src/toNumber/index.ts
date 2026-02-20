/**
 * 将 value 转换为数值
 * @param value - 要转换的值
 * @returns 返回转换后的数值
 * @example
 * toNumber(3.2) // => 3.2
 * toNumber('3.2') // => 3.2
 */
const toNumber = (value: unknown): number => {
  // 第一优先：已经是 number 类型，直接返回（包括 NaN、Infinity 等）
  if (typeof value === 'number') {
    return value
  }

  // Symbol 无法转为数值，强制 Number(symbol) 会抛错，所以直接返回 NaN
  if (typeof value === 'symbol') {
    return NaN
  }

  // 字符串类型：需要处理多种进制格式
  if (typeof value === 'string') {
    // 先去除首尾空白，避免 " 123 " 这类输入影响判断
    const trimmed = value.trim()
    // 空字符串（或纯空白字符串）转为 0，与 Number('') === 0 行为一致
    if (trimmed === '') return 0

    // 二进制字面量：匹配 0b 开头 + 仅包含 0/1 的字符串（不区分大小写）
    // parseInt 不认识 '0b' 前缀，所以用 slice(2) 去掉后以基数 2 解析
    if (/^0b[01]+$/i.test(trimmed)) {
      return parseInt(trimmed.slice(2), 2)
    }
    // 八进制字面量：匹配 0o 开头 + 仅包含 0-7 的字符串
    // 同理 slice(2) 去掉 '0o' 前缀，以基数 8 解析
    if (/^0o[0-7]+$/i.test(trimmed)) {
      return parseInt(trimmed.slice(2), 8)
    }
    // 十六进制字面量：匹配 0x 开头 + 仅包含 0-9a-f 的字符串
    // parseInt 原生支持 '0x' 前缀，所以直接传入，基数 16
    if (/^0x[0-9a-f]+$/i.test(trimmed)) {
      return parseInt(trimmed, 16)
    }

    // 其他字符串（十进制数字、科学计数法等）：交给 Number() 处理
    // Number('3.14') → 3.14，Number('1e5') → 100000，Number('abc') → NaN
    return Number(trimmed)
  }

  // 兜底：boolean、object、bigint 等其他类型，统一用 Number() 转换
  // Number(true) → 1，Number(false) → 0，Number(null) → 0
  // Number([]) → 0，Number([3]) → 3，Number({}) → NaN
  return Number(value)
}

export default toNumber
