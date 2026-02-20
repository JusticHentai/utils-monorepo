/**
 * 用于生成唯一 ID 的计数器
 */
let idCounter = 0

/**
 * 生成唯一 ID
 *
 * @description
 * 如果提供了前缀，则将其添加到 ID 前面。
 * 每次调用都会生成一个递增的唯一 ID。
 *
 * @example
 * ```ts
 * import uniqueId from '@utils/js-utils/uniqueId'
 *
 * uniqueId('contact_')
 * // => 'contact_1'
 *
 * uniqueId('contact_')
 * // => 'contact_2'
 *
 * uniqueId()
 * // => '3'
 * ```
 *
 * @param prefix - ID 前缀
 * @returns 返回唯一 ID
 */
const uniqueId = (prefix: string = ''): string => {
  const id = ++idCounter
  return `${prefix}${id}`
}

export default uniqueId
