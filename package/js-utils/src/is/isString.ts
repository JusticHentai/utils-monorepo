/**
 * 判断是否是字符串
 * @param obj
 */
export default function isString(obj: any): obj is string {
  return Object.prototype.toString.call(obj) === '[object String]'
}
