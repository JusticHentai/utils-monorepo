/**
 * 判断是否是数字, 会排除 NaN
 * @param obj
 */
export const isNumber = (obj: any): obj is number => {
  return (
    Object.prototype.toString.call(obj) === '[object Number]' && obj === obj
  )
}
