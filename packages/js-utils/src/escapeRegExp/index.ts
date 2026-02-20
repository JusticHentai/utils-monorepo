/**
 * 转义 RegExp 特殊字符
 * @param string - 要转义的字符串
 * @returns 返回转义后的字符串
 * @example
 * escapeRegExp('[lodash](https://lodash.com/)')
 * // => '\\[lodash\\]\\(https://lodash\\.com/\\)'
 */
const escapeRegExp = (string: string): string => {
  if (string == null) {
    return ''
  }

  return String(string).replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
}

export default escapeRegExp
