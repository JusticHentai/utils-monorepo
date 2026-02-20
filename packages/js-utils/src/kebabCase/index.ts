import words from '../words'

/**
 * 将字符串转换为短横线连接式（kebab-case）
 * @param str - 要转换的字符串
 * @returns 返回短横线连接式字符串
 * @example
 * kebabCase('Foo Bar')      // => 'foo-bar'
 * kebabCase('fooBar')       // => 'foo-bar'
 * kebabCase('__FOO_BAR__')  // => 'foo-bar'
 * kebabCase('foo_bar')      // => 'foo-bar'
 */
const kebabCase = (str: string): string => {
  if (!str) return ''

  return words(str)
    .map((word) => word.toLowerCase())
    .join('-')
}

export default kebabCase
