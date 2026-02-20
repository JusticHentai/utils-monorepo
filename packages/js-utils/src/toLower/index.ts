/**
 * 转换字符串为全小写
 * @param string - 要转换的字符串
 * @returns 返回转换后的字符串
 * @example
 * toLower('--Foo-Bar--')
 * // => '--foo-bar--'
 */
const toLower = (string: string): string => {
  if (string == null) {
    return ''
  }
  return String(string).toLowerCase()
}

export default toLower
