import supportIntersectionObserver from '../../supportIntersectionObserver'
import type {
  IntersectionCallback,
  IntersectionCallbackParams,
  IntersectionObserverOptions,
  PausableObserver,
} from '../interface'
import { defaultIntersectionOptions } from '../interface'

/**
 * 创建 IntersectionObserver 观察元素可见性
 *
 * @param target - 要观察的目标元素或元素数组
 * @param callback - 交叉状态变化时的回调函数
 * @param options - 观察器配置选项
 * @returns 可暂停的观察器实例
 */
export const createIntersectionObserver = (
  target: Element | Element[] | null,
  callback: IntersectionCallback,
  options?: IntersectionObserverOptions
): PausableObserver<IntersectionObserver> => {
  const mergedOptions = { ...defaultIntersectionOptions, ...options }

  const result: PausableObserver<IntersectionObserver> = {
    observer: null,
    isActive: false,
    pause: () => {},
    resume: () => {},
    stop: () => {},
  }

  if (!supportIntersectionObserver()) {
    console.warn('[observer] IntersectionObserver is not supported')
    return result
  }

  if (!target) {
    console.warn('[observer] Target element is required')
    return result
  }

  const targets = Array.isArray(target) ? target : [target]
  let observer: IntersectionObserver | null = null

  const handleIntersection: IntersectionObserverCallback = (entries) => {
    entries.forEach((entry) => {
      const params: IntersectionCallbackParams = {
        target: entry.target,
        isIntersecting: entry.isIntersecting,
        intersectionRatio: entry.intersectionRatio,
        entry,
      }
      callback(params)
    })
  }

  const observe = () => {
    if (observer) return

    observer = new IntersectionObserver(handleIntersection, {
      root: mergedOptions.root,
      rootMargin: mergedOptions.rootMargin,
      threshold: mergedOptions.threshold,
    })

    targets.forEach((el) => {
      if (el) observer?.observe(el)
    })

    result.observer = observer
    result.isActive = true
  }

  const unobserve = () => {
    if (!observer) return

    targets.forEach((el) => {
      if (el) observer?.unobserve(el)
    })

    observer.disconnect()
    observer = null
    result.observer = null
    result.isActive = false
  }

  result.pause = () => {
    if (!observer) return

    targets.forEach((el) => {
      if (el) observer?.unobserve(el)
    })
    result.isActive = false
  }

  result.resume = () => {
    if (!observer) {
      observe()
      return
    }

    targets.forEach((el) => {
      if (el) observer?.observe(el)
    })
    result.isActive = true
  }

  result.stop = unobserve

  if (mergedOptions.immediate) {
    observe()
  }

  return result
}
