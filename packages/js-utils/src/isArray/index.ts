import getTag from '../getTag'

/**
 * 检测是否是数组
 * @param obj
 */
const isArray = (obj: any): obj is any[] => {
  return getTag(obj) === '[object Array]'
}

export default isArray
