/**
 * 将字符串首字母转换为小写
 * @param str - 要转换的字符串
 * @returns 返回首字母小写的字符串
 * @example
 * lowerFirst('Fred')  // => 'fred'
 * lowerFirst('FRED')  // => 'fRED'
 */
const lowerFirst = (str: string): string => {
  if (!str) return ''

  return str.charAt(0).toLowerCase() + str.slice(1)
}

export default lowerFirst
