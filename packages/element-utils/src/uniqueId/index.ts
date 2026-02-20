/**
 * 生成唯一 ID
 * @returns 唯一标识字符串，格式为 `v4-{timestamp}-{random}`
 */
const uniqueId = (): string => {
  return `v4-${Date.now()}-${Math.random().toString(36).slice(2, 11)}`
}

export default uniqueId
