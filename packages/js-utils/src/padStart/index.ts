/**
 * 如果字符串长度小于 length，则在左侧填充字符
 * @param string - 要填充的字符串
 * @param length - 目标长度
 * @param chars - 填充字符
 * @returns 返回填充后的字符串
 * @example
 * padStart('abc', 6)
 * // => '   abc'
 */
const padStart = (
  string: string,
  length: number = 0,
  chars: string = ' '
): string => {
  if (string == null) return ''
  const str = String(string)
  if (length <= str.length || !chars) return str

  const padding = length - str.length
  let result = ''
  while (result.length < padding) {
    result += chars
  }
  return result.slice(0, padding) + str
}

export default padStart
