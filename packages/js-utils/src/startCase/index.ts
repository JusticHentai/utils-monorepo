import words from '../words'

/**
 * 转换字符串为 Start Case（每个单词首字母大写）
 *
 * 先去除撇号（' 和 \u2019 右单引号），避免 "don't" 被拆分为 ["don", "t"]，
 * 然后用 words 拆分单词，最后将每个单词首字母大写后用空格拼接。
 *
 * @param string - 要转换的字符串
 * @returns 返回转换后的字符串
 * @example
 * startCase('--foo-bar--')
 * // => 'Foo Bar'
 *
 * startCase('fooBar')
 * // => 'Foo Bar'
 */
const startCase = (string: string): string => {
  if (string == null) {
    return ''
  }

  return words(String(string).replace(/['\u2019]/g, ''))
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

export default startCase
