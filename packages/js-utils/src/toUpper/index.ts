/**
 * 转换字符串为全大写
 * @param string - 要转换的字符串
 * @returns 返回转换后的字符串
 * @example
 * toUpper('--foo-bar--')
 * // => '--FOO-BAR--'
 */
const toUpper = (string: string): string => {
  if (string == null) {
    return ''
  }
  return String(string).toUpperCase()
}

export default toUpper
