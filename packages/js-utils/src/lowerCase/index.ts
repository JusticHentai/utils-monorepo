/**
 * 转换字符串为小写形式，以空格分隔
 * @param string - 要转换的字符串
 * @returns 返回转换后的字符串
 * @example
 * lowerCase('--Foo-Bar--')
 * // => 'foo bar'
 *
 * lowerCase('fooBar')
 * // => 'foo bar'
 */
const lowerCase = (string: string): string => {
  if (string == null) {
    return ''
  }

  const wordsArray =
    String(string)
      .replace(/['\u2019]/g, '')
      .match(
        /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g
      ) || []

  return wordsArray.map((word) => word.toLowerCase()).join(' ')
}

export default lowerCase
