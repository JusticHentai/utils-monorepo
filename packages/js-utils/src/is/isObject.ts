/**
 * 判断是否是对象
 * @param obj
 */
export default function isObject(obj: any): obj is Record<string, any> {
  return Object.prototype.toString.call(obj) === '[object Object]'
}
