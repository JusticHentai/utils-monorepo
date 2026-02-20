import words from '../words'

/**
 * 转换字符串为大写形式，以空格分隔
 * @param string - 要转换的字符串
 * @returns 返回转换后的字符串
 * @example
 * upperCase('--foo-bar')
 * // => 'FOO BAR'
 *
 * upperCase('fooBar')
 * // => 'FOO BAR'
 */
const upperCase = (string: string): string => {
  if (string == null) {
    return ''
  }

  // 先移除撇号：' 是 ASCII 单引号（0x27），\u2019 是右弯单引号（'）
  // 例如 "don't" → "dont"，避免撇号被当作单词分隔符导致拆成 ["don", "t"]
  return words(String(string).replace(/['\u2019]/g, ''))
    .map((word) => word.toUpperCase())
    .join(' ')
}

export default upperCase
