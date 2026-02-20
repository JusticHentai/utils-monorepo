import { useState } from 'react'

import isFunction from '@justichentai/js-utils/isFunction'
import isUndefined from '@justichentai/js-utils/isUndefined'
import isBrowser from '../isBrowser'
import useEventListener from '../useEventListener'
import useMemoizedFn from '../useMemoizedFn'
import useUpdateEffect from '../useUpdateEffect'
import type { SetState, UseStorageStateOptions } from './interface'
import { SYNC_STORAGE_EVENT_NAME } from './interface'

export { SYNC_STORAGE_EVENT_NAME } from './interface'
export type { SetState, UseStorageStateOptions } from './interface'

export function createUseStorageState(getStorage: () => Storage | undefined) {
  function useStorageState<T>(
    key: string,
    options: UseStorageStateOptions<T> = {}
  ) {
    let storage: Storage | undefined
    const {
      listenStorageChange = false,
      onError = (e) => {
        console.error(e)
      },
    } = options

    try {
      storage = getStorage()
    } catch (err) {
      onError(err)
    }

    const serializer = (value: T) => {
      if (options.serializer) {
        return options.serializer(value)
      }
      return JSON.stringify(value)
    }

    const deserializer = (value: string) => {
      if (options.deserializer) {
        return options.deserializer(value)
      }
      return JSON.parse(value)
    }

    function getStoredValue() {
      try {
        const raw = storage?.getItem(key)
        if (raw) {
          return deserializer(raw)
        }
      } catch (e) {
        onError(e)
      }

      if (isFunction(options.defaultValue)) {
        return options.defaultValue()
      }

      return options.defaultValue
    }

    const [state, setState] = useState<T>(getStoredValue)

    useUpdateEffect(() => {
      setState(getStoredValue())
    }, [key])

    const updateState = (value: SetState<T>) => {
      const currentState = isFunction(value) ? value(state) : value

      if (!listenStorageChange) {
        setState(currentState)
      }

      try {
        let newValue: string | null
        const oldValue = storage?.getItem(key)

        if (isUndefined(currentState)) {
          newValue = null
          storage?.removeItem(key)
        } else {
          newValue = serializer(currentState)
          storage?.setItem(key, newValue)
        }

        dispatchEvent(
          new CustomEvent(SYNC_STORAGE_EVENT_NAME, {
            detail: {
              key,
              newValue,
              oldValue,
              storageArea: storage,
            },
          })
        )
      } catch (e) {
        onError(e)
      }
    }

    const syncState = (event: StorageEvent) => {
      if (event.key !== key || event.storageArea !== storage) {
        return
      }

      setState(getStoredValue())
    }

    const syncStateFromCustomEvent = (event: CustomEvent<StorageEvent>) => {
      syncState(event.detail)
    }

    // 监听其他文档的存储变化
    useEventListener('storage', syncState)

    // 监听同一文档不同 hook 的存储变化
    useEventListener(SYNC_STORAGE_EVENT_NAME as any, syncStateFromCustomEvent)

    return [
      state,
      useMemoizedFn(updateState) as (value: SetState<T>) => void,
    ] as const
  }

  return useStorageState
}

/**
 * 将状态存储在 localStorage 中
 *
 * @param key - 存储键名
 * @param options - 配置项
 *
 * @example
 * ```ts
 * const [message, setMessage] = useLocalStorageState('message', {
 *   defaultValue: 'Hello',
 * });
 *
 * setMessage('World');
 * ```
 */
export const useLocalStorageState = createUseStorageState(() =>
  isBrowser() ? localStorage : undefined
)

/**
 * 将状态存储在 sessionStorage 中
 *
 * @param key - 存储键名
 * @param options - 配置项
 *
 * @example
 * ```ts
 * const [message, setMessage] = useSessionStorageState('message', {
 *   defaultValue: 'Hello',
 * });
 *
 * setMessage('World');
 * ```
 */
export const useSessionStorageState = createUseStorageState(() =>
  isBrowser() ? sessionStorage : undefined
)
