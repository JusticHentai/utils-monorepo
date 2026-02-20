import { deburredMap } from './interface'

/**
 * 转换字符串中的拉丁增补字母和拉丁扩展字母 A 为基本拉丁字母
 * @param string - 要转换的字符串
 * @returns 返回转换后的字符串
 * @example
 * deburr('déjà vu')
 * // => 'deja vu'
 */
const deburr = (string: string): string => {
  if (!string) {
    return ''
  }

  let result = ''
  for (const char of string) {
    result += deburredMap[char] || char
  }

  // 移除组合音标
  return result.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
}

export default deburr
