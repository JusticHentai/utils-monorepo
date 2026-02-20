/**
 * 将字符串解析为指定基数的整数
 * @param string - 要解析的字符串
 * @param radix - 基数，默认为 10
 * @returns 返回解析后的整数
 * @example
 * parseInt('08')
 * // => 8
 *
 * ['6', '08', '10'].map(parseInt)
 * // => [6, 8, 10]
 */
const parseIntFunc = (string: string, radix: number = 10): number => {
  if (string == null) {
    return NaN
  }

  const str = String(string).trim()

  // 自动检测基数
  if (radix === undefined || radix === 0) {
    if (str.startsWith('0x') || str.startsWith('0X')) {
      radix = 16
    } else {
      radix = 10
    }
  }

  return Number.parseInt(str, radix)
}

export default parseIntFunc
