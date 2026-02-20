import type { FormatStackOptions } from './interface'

/**
 * 格式化堆栈信息
 * @param stack - 原始堆栈字符串
 * @param options - 配置选项
 * @returns 格式化后的堆栈信息
 */
const formatStack = (stack?: string, options?: FormatStackOptions): string => {
  if (!stack) return ''

  const { maxLines = 10 } = options || {}

  return stack
    .split('\n')
    .slice(0, maxLines)
    .map((line) => line.trim())
    .join('\n')
}

export default formatStack
