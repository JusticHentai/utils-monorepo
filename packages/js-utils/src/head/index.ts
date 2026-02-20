/**
 * 获取数组的第一个元素
 * @param array - 要查询的数组
 * @returns 返回数组的第一个元素
 * @example
 * head([1, 2, 3])
 * // => 1
 *
 * head([])
 * // => undefined
 */
const head = <T>(array: T[]): T | undefined => {
  return array?.[0]
}

/**
 * head 的别名
 * @alias head
 */
export const first = head

export default head
