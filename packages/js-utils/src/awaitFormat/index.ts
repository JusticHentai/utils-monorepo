/**
 * 将 fn 转为返回 [res, err] 的形式
 * @param fn 函数
 * @returns 返回 [res, err] 的形式
 */
const awaitFormat = <Params extends any[], Res>(
  fn: (...params: Params) => Promise<Res>
): ((...params: Params) => Promise<[Res, undefined] | [undefined, any]>) => {
  return async (...params: Params) => {
    try {
      const res = await fn(...params)
      return [res, undefined]
    } catch (err) {
      return [undefined, err]
    }
  }
}

export default awaitFormat
