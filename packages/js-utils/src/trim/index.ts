/**
 * 从字符串两端移除空白字符或指定字符
 * @param str - 要处理的字符串
 * @param chars - 要移除的字符
 * @returns 返回处理后的字符串
 * @example
 * trim('  abc  ') // => 'abc'
 * trim('-_-abc-_-', '_-') // => 'abc'
 */
const trim = (str: string, chars?: string): string => {
  if (!str) return ''

  if (chars === undefined) {
    return str.trim()
  }

  const charSet = new Set(chars.split(''))
  let start = 0
  let end = str.length - 1

  while (start <= end && charSet.has(str[start])) {
    start++
  }

  while (end >= start && charSet.has(str[end])) {
    end--
  }

  return str.slice(start, end + 1)
}

export default trim
