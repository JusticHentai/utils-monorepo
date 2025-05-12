/**
 * 截断字符串并添加省略号（包含在总长度中）
 * Truncate string with ellipsis (included in total length)
 * @param str 原始字符串 | Original string
 * @param maxLength 最大长度（包含省略号的3个字符） | Max length including ellipsis
 * @returns 截断后的字符串 | Truncated string
 */
const truncate = (str: string, maxLength: number) => {
  // 长度未超限直接返回原字符串
  if (str.length <= maxLength) {
    return str
  }

  // 截取前N个字符并追加省略号（总长度=N+3）
  return `${str.slice(0, maxLength)}...`
}

export default truncate
