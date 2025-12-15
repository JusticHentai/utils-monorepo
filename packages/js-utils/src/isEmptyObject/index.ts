import isObject from '../isObject'

/**
 * 判断是否是空对象
 * @param obj
 */
const isEmptyObject = (obj: any): boolean => {
  return isObject(obj) && Object.keys(obj).length === 0
}

export default isEmptyObject
