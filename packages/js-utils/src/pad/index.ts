/**
 * 如果字符串长度小于 length，则在两侧填充字符
 *
 * 当填充总量为奇数时，右侧会多填充一个字符。
 *
 * @param string - 要填充的字符串
 * @param length - 目标长度
 * @param chars - 填充字符
 * @returns 返回填充后的字符串
 * @example
 * pad('abc', 8)
 * // => '  abc   '
 *
 * // 填充总量为奇数（5），左侧 2，右侧 3
 * pad('abc', 8, '_')
 * // => '__abc___'
 */
const pad = (
  string: string,
  length: number = 0,
  chars: string = ' '
): string => {
  if (string == null) return ''
  const str = String(string)
  if (length <= str.length || !chars) return str

  const totalPad = length - str.length
  const leftPad = Math.floor(totalPad / 2)
  const rightPad = totalPad - leftPad

  const repeatChars = (padding: number): string => {
    let result = ''
    while (result.length < padding) {
      result += chars
    }
    return result.slice(0, padding)
  }

  return repeatChars(leftPad) + str + repeatChars(rightPad)
}

export default pad
