/**
 * 将属性路径字符串解析为路径数组
 *
 * 支持三种路径格式：
 * - 点号分隔的属性名：`a.b.c`
 * - 数字索引：`a[0].b`
 * - 引号属性：`a["key"].b` 或 `a['key'].b`
 *
 * @param path - 属性路径，支持字符串或字符串数组
 * @returns 返回路径数组
 * @example
 * toPathArray('a[0].b.c')
 * // => ['a', '0', 'b', 'c']
 *
 * toPathArray('a["key"].b')
 * // => ['a', 'key', 'b']
 *
 * toPathArray(['a', 'b'])
 * // => ['a', 'b']
 */
const toPathArray = (path: string | string[]): string[] => {
  if (Array.isArray(path)) return path

  const result: string[] = []
  // 路径解析正则，匹配三种模式：
  // 1. [^.[\]]+ — 普通属性名（不含 . [ ] 的连续字符），如 a、b、slice
  // 2. \[(\d+)\] — 数字索引，如 [0]、[3]，捕获组 1 拿到数字
  // 3. \[["']([^"']*)["']\] — 引号括起的属性名，如 ["key"]、['name']，捕获组 2 拿到内容
  const regex = /[^.[\]]+|\[(?:(\d+)|["']([^"']*)["'])\]/g
  let match: RegExpExecArray | null

  // regex.exec 每次调用从上次位置继续匹配下一段，返回 null 表示匹配结束
  // match[0] = 完整匹配内容（如 'a'、'[0]'、'["key"]'）
  // match[1] = 捕获组1，数字索引的数字部分（如 '0'），仅 [0] 格式时有值
  // match[2] = 捕获组2，引号内的内容（如 'key'），仅 ["key"] 格式时有值
  // ?? 空值合并：优先取捕获组（去掉括号/引号），都没有则取完整匹配
  while ((match = regex.exec(path)) !== null) {
    result.push(match[1] ?? match[2] ?? match[0])
  }

  return result
}

export default toPathArray
