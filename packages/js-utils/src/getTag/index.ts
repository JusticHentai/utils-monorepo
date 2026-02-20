/**
 * 获取值的内部类型标签
 *
 * 通过 Object.prototype.toString.call 获取值的 [[Class]] 标签，
 * 返回形如 '[object Type]' 的字符串，能准确区分所有 JS 内置类型。
 *
 * 被 isEqual、isError、isTypedArray 等 17 个类型检测工具内部使用。
 *
 * @param value - 要获取类型标签的值
 * @returns 类型标签字符串，如 '[object Array]'、'[object Date]'
 * @example
 * getTag([])           // => '[object Array]'
 * getTag(null)         // => '[object Null]'
 * getTag(new Map())    // => '[object Map]'
 * getTag(123)          // => '[object Number]'
 */
const getTag = (value: unknown): string => {
  return Object.prototype.toString.call(value)
}

export default getTag
