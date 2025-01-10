/**
 * 获取 Promise<T> 里的 T类型
 * 嵌套则拿最里面的
 */
type Await<Type extends Promise<unknown>> = Type extends Promise<infer Result>
  ? Result extends Promise<unknown>
    ? Await<Result>
    : Result
  : never

export default Await
