/**
 * 判断是否是数字
 * @param obj
 */
const isNumber = (obj: any): obj is number => {
  return (
    Object.prototype.toString.call(obj) === '[object Number]' && obj === obj
  )
}

export default isNumber
