/**
 * 判断是否匹配规则
 *
 * 支持字符串包含匹配和正则表达式匹配，
 * 常用于 URL 过滤、日志筛选、错误信息匹配等场景。
 *
 * @param value - 要匹配的值
 * @param patterns - 匹配规则列表（字符串或正则表达式）
 * @returns 是否匹配任一规则
 */
const matchPattern = (
  value: string,
  patterns: (string | RegExp)[]
): boolean => {
  return patterns.some((pattern) => {
    if (typeof pattern === 'string') {
      return value.includes(pattern)
    }

    return pattern.test(value)
  })
}

export default matchPattern
