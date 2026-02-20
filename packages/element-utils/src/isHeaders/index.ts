/**
 * 判断是否是 Headers 实例
 * @param obj
 */
const isHeaders = (obj: unknown): obj is Headers => {
  return obj instanceof Headers
}

export default isHeaders
