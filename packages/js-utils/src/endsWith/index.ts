/**
 * 检查字符串 string 是否以给定的目标字符串结尾
 * @param string - 要检查的字符串
 * @param target - 目标字符串
 * @param position - 搜索的结束位置，默认为 string.length
 * @returns 如果以目标字符串结尾，返回 true
 * @example
 * endsWith('abc', 'c')
 * // => true
 *
 * endsWith('abc', 'b')
 * // => false
 *
 * endsWith('abc', 'b', 2)
 * // => true
 */
const endsWith = (
  string: string,
  target: string,
  position?: number
): boolean => {
  if (string == null) return false
  const str = String(string)
  const end =
    position === undefined
      ? str.length
      : Math.max(0, Math.min(position, str.length))
  const start = end - target.length
  return start >= 0 && str.slice(start, end) === target
}

export default endsWith
