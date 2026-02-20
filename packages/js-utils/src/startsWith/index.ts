/**
 * 检查字符串 string 是否以给定的目标字符串开头
 * @param string - 要检查的字符串
 * @param target - 目标字符串
 * @param position - 搜索的起始位置，默认为 0
 * @returns 如果以目标字符串开头，返回 true
 * @example
 * startsWith('abc', 'a')
 * // => true
 *
 * startsWith('abc', 'b')
 * // => false
 *
 * startsWith('abc', 'b', 1)
 * // => true
 */
const startsWith = (
  string: string,
  target: string,
  position: number = 0
): boolean => {
  if (string == null) return false
  const str = String(string)
  const pos = Math.max(0, Math.min(position, str.length))
  return str.slice(pos, pos + target.length) === target
}

export default startsWith
