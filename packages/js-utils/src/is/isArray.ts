/**
 * 检测是否是数组
 * @param obj
 */
export default function isArray(obj: any): obj is any[] {
  return Object.prototype.toString.call(obj) === '[object Array]'
}
