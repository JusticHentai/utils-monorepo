import isString from '@justichentai/js-utils/isString'
import safeStringify from '../safeStringify'
import supportTextEncoder from '../supportTextEncoder'

/**
 * 估算未知值序列化后的 UTF-8 字节数
 *
 * 浏览器支持 TextEncoder 时按 UTF-8 编码计算；老环境降级为字符串长度。
 *
 * @param value - 需要估算体积的未知值
 * @returns 序列化结果的字节数
 */
const estimateBytes = (value: unknown): number => {
  const text = isString(value) ? value : safeStringify(value)

  if (supportTextEncoder()) {
    return new TextEncoder().encode(text).length
  }

  return text.length
}

export default estimateBytes
