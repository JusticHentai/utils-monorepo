/**
 * 将字符串首字母转换为大写
 * @param str - 要转换的字符串
 * @returns 返回首字母大写的字符串
 * @example
 * capitalize('fred')  // => 'Fred'
 * capitalize('FRED')  // => 'Fred'
 */
const capitalize = (str: string): string => {
  if (!str) return ''

  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
}

export default capitalize
