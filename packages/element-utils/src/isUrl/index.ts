/**
 * 判断是否是 URL 实例
 * @param obj
 */
const isUrl = (obj: unknown): obj is URL => {
  return obj instanceof URL
}

export default isUrl
