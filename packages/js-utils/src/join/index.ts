/**
 * 将数组元素转换为由分隔符连接的字符串
 * @param array - 要转换的数组
 * @param separator - 分隔符，默认为 ','
 * @returns 返回连接后的字符串
 * @example
 * join(['a', 'b', 'c'], '~')
 * // => 'a~b~c'
 */
const join = <T>(array: T[], separator: string = ','): string => {
  if (!array?.length) {
    return ''
  }

  return array.join(separator)
}

export default join
