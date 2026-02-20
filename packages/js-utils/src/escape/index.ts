import { htmlEscapes } from './interface'

/**
 * 转义字符串中的 HTML 特殊字符
 * @param string - 要转义的字符串
 * @returns 返回转义后的字符串
 * @example
 * escape('fred, barney, & pebbles')
 * // => 'fred, barney, &amp; pebbles'
 */
const escape = (string: string): string => {
  if (string == null) {
    return ''
  }

  return String(string).replace(/[&<>"']/g, (char) => htmlEscapes[char])
}

export default escape
