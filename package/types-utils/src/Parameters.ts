/**
 * 获取函数的变量 类型
 */
type MyParameters<T extends Function> = T extends (params: infer Result) => any
  ? Result
  : never

export default MyParameters
