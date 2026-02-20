import getTag from '../getTag'

/**
 * 判断是否是字符串
 * @param obj
 */
const isString = (obj: any): obj is string => {
  return getTag(obj) === '[object String]'
}

export default isString
