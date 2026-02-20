/**
 * 从字符串结尾移除空白字符或指定字符
 * @param str - 要处理的字符串
 * @param chars - 要移除的字符
 * @returns 返回处理后的字符串
 * @example
 * trimEnd('  abc  ')
 * // => '  abc'
 */
const trimEnd = (str: string, chars?: string): string => {
  if (!str) return ''

  if (chars === undefined) {
    return str.trimEnd()
  }

  const charSet = new Set(chars.split(''))
  let end = str.length - 1

  while (end >= 0 && charSet.has(str[end])) {
    end--
  }

  return str.slice(0, end + 1)
}

export default trimEnd
