import BaseFunction from '../BaseFunction'

/**
 * 包装函数类型
 * 接受原函数的参数，返回 WrappedFunctionResult
 * @param Fn 被包装的函数类型
 * @param ErrorType 错误类型，默认为 any
 */
type WrappedFunction<Fn extends BaseFunction, ErrorType = any> = (
  ...args: Parameters<Fn>
) => Promise<[Awaited<ReturnType<Fn>>, undefined] | [undefined, ErrorType]>

export default WrappedFunction
