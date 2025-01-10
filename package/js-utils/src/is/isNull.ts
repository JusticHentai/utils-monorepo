/**
 * 判断是否是 null
 * @param obj
 */
export default function isNull(obj: any): obj is null {
  return obj === null
}
