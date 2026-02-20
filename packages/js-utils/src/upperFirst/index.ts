/**
 * 将字符串首字母转换为大写，其余部分保持不变
 * @param str - 要转换的字符串
 * @returns 返回首字母大写的字符串
 * @example
 * upperFirst('fred')  // => 'Fred'
 * upperFirst('FRED')  // => 'FRED'
 */
const upperFirst = (str: string): string => {
  if (!str) return ''

  return str.charAt(0).toUpperCase() + str.slice(1)
}

export default upperFirst
