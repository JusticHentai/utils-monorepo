import getTag from '../getTag'

/**
 * 判断是否是数字, 会排除 NaN
 * @param obj
 */
const isNumber = (obj: any): obj is number => {
  return getTag(obj) === '[object Number]' && obj === obj
}

export default isNumber
