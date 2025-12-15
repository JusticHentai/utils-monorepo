/**
 * 判断是否是对象
 * @param obj
 */
const isObject = (obj: any): obj is Record<string, any> => {
  return Object.prototype.toString.call(obj) === '[object Object]'
}

export default isObject
