import { TruncateOptions } from './interface'

/**
 * 截断字符串并添加省略号（包含在总长度中）
 */
const truncate = ({ str, maxLength }: TruncateOptions): string => {
  // 长度未超限直接返回原字符串
  if (str.length <= maxLength) {
    return str
  }

  // 截取前N个字符并追加省略号（总长度=N）
  return `${str.slice(0, maxLength - 3)}...`
}

export default truncate
