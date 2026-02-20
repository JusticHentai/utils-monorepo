import words from '../words'

/**
 * 将字符串转换为驼峰式（camelCase）
 * @param str - 要转换的字符串
 * @returns 返回驼峰式字符串
 * @example
 * camelCase('Foo Bar')      // => 'fooBar'
 * camelCase('--foo-bar--')  // => 'fooBar'
 * camelCase('__FOO_BAR__')  // => 'fooBar'
 * camelCase('foo_bar')      // => 'fooBar'
 * camelCase('FooBar')       // => 'fooBar'
 */
const camelCase = (str: string): string => {
  if (!str) return ''

  return words(str)
    .map((word, index) => {
      const lower = word.toLowerCase()
      if (index === 0) return lower
      return lower.charAt(0).toUpperCase() + lower.slice(1)
    })
    .join('')
}

export default camelCase
