/**
 * 按分隔符拆分字符串
 * @param string - 要拆分的字符串
 * @param separator - 分隔符
 * @param limit - 限制结果数量
 * @returns 返回拆分后的数组
 * @example
 * split('a-b-c', '-', 2)
 * // => ['a', 'b']
 */
const split = (
  string: string,
  separator?: string | RegExp,
  limit?: number
): string[] => {
  if (string == null) {
    return []
  }

  return String(string).split(separator as string, limit)
}

export default split
