/**
 * 判断是否是字符串
 * @param obj
 */
const isString = (obj: any): obj is string => {
  return Object.prototype.toString.call(obj) === '[object String]'
}

export default isString
