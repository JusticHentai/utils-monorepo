import type { MemoizedFunc } from './interface'

/**
 * 创建一个记忆化函数，缓存 func 的计算结果
 * @param func - 要记忆化的函数
 * @param resolver - 可选的解析函数，用于生成缓存键
 * @returns 返回记忆化函数
 * @example
 * const fibonacci = memoize((n: number): number => {
 *   if (n < 2) return n
 *   return fibonacci(n - 1) + fibonacci(n - 2)
 * })
 *
 * fibonacci(10) // 计算并缓存
 * fibonacci(10) // 直接返回缓存结果
 *
 * // 使用自定义解析器
 * const getUserData = memoize(
 *   (user: { id: number }) => fetchUser(user.id),
 *   (user) => user.id
 * )
 */
const memoize = <T extends (...args: unknown[]) => unknown>(
  func: T,
  resolver?: (...args: Parameters<T>) => unknown
): MemoizedFunc<T> => {
  const memoized = ((...args: Parameters<T>): ReturnType<T> => {
    const key = resolver ? resolver(...args) : args[0]
    const { cache } = memoized

    if (cache.has(key)) {
      return cache.get(key)!
    }

    const result = func(...args) as ReturnType<T>
    cache.set(key, result)
    return result
  }) as MemoizedFunc<T>

  memoized.cache = new Map<unknown, ReturnType<T>>()

  return memoized
}

export default memoize
