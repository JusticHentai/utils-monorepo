/**
 * 将 fn 转为返回 [res, err] 的形式
 * @param fn 函数
 * @returns 返回 [res, err] 的形式
 */
const asyncFormat = <Fn extends (...params: any[]) => Promise<any>>(
  fn: Fn
): ((
  ...params: Parameters<Fn>
) => Promise<[Awaited<ReturnType<Fn>>, undefined] | [undefined, any]>) => {
  return async (...params: Parameters<Fn>) => {
    try {
      const res = await fn(...params)
      return [res, undefined]
    } catch (err) {
      return [undefined, err]
    }
  }
}

export default asyncFormat
