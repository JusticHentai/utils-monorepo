/**
 * 检查 value 是否是 Buffer
 * @param value - 要检查的值
 * @returns 如果是 Buffer，返回 true
 * @example
 * isBuffer(Buffer.alloc(2))
 * // => true
 *
 * isBuffer(new Uint8Array(2))
 * // => false
 */
const isBuffer = (value: unknown): boolean => {
  if (value == null) return false

  const constructor = (
    value as { constructor?: { isBuffer?: (v: unknown) => boolean } }
  ).constructor

  return (
    typeof constructor?.isBuffer === 'function' && constructor.isBuffer(value)
  )
}

export default isBuffer
