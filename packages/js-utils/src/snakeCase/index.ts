import words from '../words'

/**
 * 将字符串转换为下划线连接式（snake_case）
 * @param str - 要转换的字符串
 * @returns 返回下划线连接式字符串
 * @example
 * snakeCase('Foo Bar')      // => 'foo_bar'
 * snakeCase('fooBar')       // => 'foo_bar'
 * snakeCase('--FOO-BAR--')  // => 'foo_bar'
 * snakeCase('foo-bar')      // => 'foo_bar'
 */
const snakeCase = (str: string): string => {
  if (!str) return ''

  return words(str)
    .map((word) => word.toLowerCase())
    .join('_')
}

export default snakeCase
