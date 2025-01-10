/**
 * 获取函数返回值
 */
type MyReturnType<T extends Function> = T extends (...args: any[]) => infer R
  ? R
  : never

export default MyReturnType
