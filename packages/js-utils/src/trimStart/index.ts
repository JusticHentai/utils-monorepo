/**
 * 从字符串开头移除空白字符或指定字符
 * @param str - 要处理的字符串
 * @param chars - 要移除的字符
 * @returns 返回处理后的字符串
 * @example
 * trimStart('  abc  ')
 * // => 'abc  '
 */
const trimStart = (str: string, chars?: string): string => {
  if (!str) return ''

  if (chars === undefined) {
    return str.trimStart()
  }

  const charSet = new Set(chars.split(''))
  let start = 0

  while (start < str.length && charSet.has(str[start])) {
    start++
  }

  return str.slice(start)
}

export default trimStart
