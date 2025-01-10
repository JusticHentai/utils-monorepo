/**
 * 判断是否是函数
 * @param obj
 */
export default function isFunction(obj: any): obj is (...args: any[]) => any {
  return typeof obj === 'function'
}
