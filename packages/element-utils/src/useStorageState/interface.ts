export const SYNC_STORAGE_EVENT_NAME = 'ELEMENT_UTILS_SYNC_STORAGE_EVENT_NAME'

export type SetState<S> = S | ((prevState?: S) => S)

export interface UseStorageStateOptions<T> {
  /** 默认值 */
  defaultValue?: T | (() => T)
  /** 是否监听存储变化 */
  listenStorageChange?: boolean
  /** 自定义序列化 */
  serializer?: (value: T) => string
  /** 自定义反序列化 */
  deserializer?: (value: string) => T
  /** 错误处理 */
  onError?: (error: unknown) => void
}
