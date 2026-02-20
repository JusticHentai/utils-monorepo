/**
 * 获取最大缓冲区错误消息
 * @param error - 错误对象
 * @param maxBuffer - 最大缓冲区配置
 */
export const getMaxBufferMessage = (error: Error | undefined, maxBuffer: number[]): string => {
  const maxBufferValue = Math.min(...maxBuffer.filter(Boolean))
  return `Command's output was larger than ${maxBufferValue} bytes`
}

/**
 * 获取同步模式的最大缓冲区值
 * @param maxBuffer - 最大缓冲区配置
 */
export const getMaxBufferSync = (maxBuffer?: number | number[]): number => {
  if (maxBuffer === undefined) {
    return Infinity
  }

  if (Array.isArray(maxBuffer)) {
    return Math.min(...maxBuffer.filter(Boolean))
  }

  return maxBuffer
}
