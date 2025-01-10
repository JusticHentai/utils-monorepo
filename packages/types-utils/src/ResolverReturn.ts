/**
 * 解答器
 * key 对应一个 func
 */
type Resolver<T extends { [key: string]: any }> = {
  [P in keyof T]: (...args: any) => any
}

/**
 * 获取解答器的返回类型
 * key 对应的 func 的返回类型
 */
type ResolverReturn<T extends Resolver<T>> = {
  [P in keyof T]: ReturnType<T[P]>
}

export default ResolverReturn
