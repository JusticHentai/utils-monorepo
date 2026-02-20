import supportPerformanceObserver, {
  supportEntryType,
} from '../../supportPerformanceObserver'
import type {
  PausableObserver,
  PerformanceCallback,
  PerformanceEntryType,
  PerformanceObserverOptions,
} from '../interface'
import { defaultPerformanceOptions } from '../interface'

/**
 * 创建 PerformanceObserver 监听性能指标
 *
 * @param type - 要监听的 entry 类型
 * @param callback - 条目回调函数
 * @param options - 观察器配置
 * @returns 可暂停的观察器实例
 */
export const createPerformanceObserver = <
  T extends PerformanceEntry = PerformanceEntry,
>(
  type: PerformanceEntryType | string,
  callback: PerformanceCallback<T>,
  options?: PerformanceObserverOptions
): PausableObserver<PerformanceObserver> => {
  const mergedOptions = { ...defaultPerformanceOptions, ...options }

  const result: PausableObserver<PerformanceObserver> = {
    observer: null,
    isActive: false,
    pause: () => {},
    resume: () => {},
    stop: () => {},
  }

  if (!supportPerformanceObserver()) {
    console.warn('[observer] PerformanceObserver is not supported')
    return result
  }

  if (!supportEntryType(type)) {
    console.warn(`[observer] Entry type "${type}" is not supported`)
    return result
  }

  let observer: PerformanceObserver | null = null

  const observe = () => {
    if (observer) return

    try {
      observer = new PerformanceObserver((list) => {
        callback(list.getEntries() as T[])
      })

      observer.observe({
        type,
        buffered: mergedOptions.buffered,
        ...(mergedOptions.durationThreshold !== undefined && {
          durationThreshold: mergedOptions.durationThreshold,
        }),
      })

      result.observer = observer
      result.isActive = true
    } catch (error) {
      console.warn(`[observer] Failed to create observer for "${type}"`, error)
    }
  }

  const disconnect = () => {
    if (!observer) return

    observer.disconnect()
    observer = null
    result.observer = null
    result.isActive = false
  }

  result.pause = disconnect
  result.resume = observe
  result.stop = disconnect

  if (mergedOptions.immediate) {
    observe()
  }

  return result
}
