/**
 * 替换字符串中匹配的部分
 * @param string - 要修改的字符串
 * @param pattern - 要替换的模式
 * @param replacement - 替换的字符串
 * @returns 返回修改后的字符串
 * @example
 * replace('Hi Fred', 'Fred', 'Barney')
 * // => 'Hi Barney'
 */
const replace = (
  string: string,
  pattern: string | RegExp,
  replacement: string | ((substring: string, ...args: unknown[]) => string)
): string => {
  if (string == null) {
    return ''
  }

  return String(string).replace(pattern, replacement as string)
}

export default replace
