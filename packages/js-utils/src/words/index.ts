/**
 * 将字符串拆分成单词数组
 * 支持 camelCase、PascalCase、snake_case、kebab-case 等格式
 */
const words = (str: string): string[] => {
  if (!str) return []

  // 匹配单词的正则表达式
  // 支持：camelCase, PascalCase, snake_case, kebab-case, 空格分隔, 连续大写字母等
  const pattern = /[A-Z]{2,}(?=[A-Z][a-z]+|\b)|[A-Z]?[a-z]+|[A-Z]|[0-9]+/g

  return str.match(pattern) || []
}

export default words
