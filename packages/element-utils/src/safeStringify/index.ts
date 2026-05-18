const toSafeString = (value: unknown): string => {
  try {
    return String(value)
  } catch {
    return Object.prototype.toString.call(value)
  }
}

/**
 * 安全序列化未知值
 *
 * 用于处理错误原因、日志上下文、上报 payload 等可能包含循环引用的值。
 *
 * @param value - 需要序列化的未知值
 * @returns 可安全展示或传输的字符串
 */
const safeStringify = (value: unknown): string => {
  const seen: unknown[] = []

  try {
    const text = JSON.stringify(value, (_key, item: unknown) => {
      if (typeof item === 'bigint') return item.toString()
      if (typeof item !== 'object' || item === null) return item
      if (seen.includes(item)) return '[Circular]'
      seen.push(item)
      return item
    })

    return text ?? toSafeString(value)
  } catch {
    return toSafeString(value)
  }
}

export default safeStringify
