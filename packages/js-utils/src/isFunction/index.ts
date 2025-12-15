/**
 * 判断是否是函数
 * @param obj
 */
const isFunction = (obj: any): obj is (...args: any[]) => any => {
  return typeof obj === 'function'
}

export default isFunction
