/** 缓存接口 */
export interface MemoizeCache<K, V> {
  /** 获取缓存值 */
  get: (key: K) => V | undefined
  /** 检查是否存在 */
  has: (key: K) => boolean
  /** 设置缓存值 */
  set: (key: K, value: V) => void
  /** 删除缓存值 */
  delete?: (key: K) => boolean
  /** 清空缓存 */
  clear?: () => void
}

/** 带缓存的记忆化函数接口 */
export interface MemoizedFunc<T extends (...args: unknown[]) => unknown> {
  /** 调用记忆化函数 */
  (...args: Parameters<T>): ReturnType<T>
  /** 缓存实例 */
  cache: Map<unknown, ReturnType<T>>
}
