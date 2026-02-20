/**
 * 重复字符串 n 次
 * @param string - 要重复的字符串
 * @param n - 重复次数，默认为 1
 * @returns 返回重复后的字符串
 * @example
 * repeat('*', 3)
 * // => '***'
 *
 * repeat('abc', 2)
 * // => 'abcabc'
 *
 * repeat('abc', 0)
 * // => ''
 */
const repeat = (string: string, n: number = 1): string => {
  if (string == null) {
    return ''
  }

  if (n < 1) {
    return ''
  }

  return String(string).repeat(Math.floor(n))
}

export default repeat
