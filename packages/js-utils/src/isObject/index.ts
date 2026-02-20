import getTag from '../getTag'

/**
 * 判断是否是对象
 * @param obj
 */
const isObject = (obj: any): obj is Record<string, any> => {
  return getTag(obj) === '[object Object]'
}

export default isObject
