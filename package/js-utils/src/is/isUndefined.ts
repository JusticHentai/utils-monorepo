/**
 * 判断是否是 undefined
 * @param obj
 */
export default function isUndefined(obj: any): obj is undefined {
  return obj === undefined
}
