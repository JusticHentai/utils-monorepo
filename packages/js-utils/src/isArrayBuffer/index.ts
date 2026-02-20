import getTag from '../getTag'

/**
 * 检查 value 是否是 ArrayBuffer 对象
 * @param value - 要检查的值
 * @returns 如果是 ArrayBuffer，返回 true
 * @example
 * isArrayBuffer(new ArrayBuffer(2))
 * // => true
 */
const isArrayBuffer = (value: unknown): value is ArrayBuffer => {
  return getTag(value) === '[object ArrayBuffer]'
}

export default isArrayBuffer
