/**
 * 基础函数类型
 */
type BaseFunction<Params extends any[] = any[], Return = any> = (
  ...params: Params
) => Return

export default BaseFunction
