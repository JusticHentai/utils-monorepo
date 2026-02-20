/**
 * 将 value 转换为字符串
 * @param value - 要转换的值
 * @returns 返回转换后的字符串
 * @example
 * toStringValue(null) // => ''
 * toStringValue(-0) // => '-0'
 * toStringValue([1, 2, 3]) // => '1,2,3'
 */
const toStringValue = (value: unknown): string => {
  if (value == null) {
    return ''
  }

  if (typeof value === 'string') {
    return value
  }

  if (Array.isArray(value)) {
    return value
      .map((item) => (item == null ? '' : toStringValue(item)))
      .join(',')
  }

  // 处理 -0（负零）的特殊情况
  // JS 中 -0 === 0 为 true，String(-0) 返回 '0' 而非 '-0'，会丢失符号信息
  // 利用 1 / -0 === -Infinity 的特性来检测 -0（1 / +0 === Infinity，两者不同）
  // 这在需要保留方向信息的场景中很重要（如动画中的运动方向）
  if (typeof value === 'number' && 1 / value === -Infinity) {
    return '-0'
  }

  return String(value)
}

export default toStringValue
