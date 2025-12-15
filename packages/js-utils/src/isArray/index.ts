/**
 * 检测是否是数组
 * @param obj
 */
const isArray = (obj: any): obj is any[] => {
  return Object.prototype.toString.call(obj) === '[object Array]'
}

export default isArray
