import supportMutationObserver from '../../supportMutationObserver'
import type {
  MutationCallback,
  MutationObserverOptions,
  PausableObserver,
} from '../interface'
import { defaultMutationOptions } from '../interface'

/**
 * 创建 MutationObserver 监听 DOM 变化
 *
 * @param target - 要观察的目标元素或元素数组
 * @param callback - DOM 变化时的回调函数
 * @param options - 观察器配置选项
 * @returns 可暂停的观察器实例
 */
export const createMutationObserver = (
  target: Element | Element[] | null,
  callback: MutationCallback,
  options?: MutationObserverOptions
): PausableObserver<MutationObserver> => {
  const mergedOptions = { ...defaultMutationOptions, ...options }

  const result: PausableObserver<MutationObserver> = {
    observer: null,
    isActive: false,
    pause: () => {},
    resume: () => {},
    stop: () => {},
  }

  if (!supportMutationObserver()) {
    console.warn('[observer] MutationObserver is not supported')
    return result
  }

  if (!target) {
    console.warn('[observer] Target element is required')
    return result
  }

  const targets = Array.isArray(target) ? target : [target]
  let observer: MutationObserver | null = null

  const mutationOptions: MutationObserverInit = {
    childList: mergedOptions.childList,
    attributes: mergedOptions.attributes,
    characterData: mergedOptions.characterData,
    subtree: mergedOptions.subtree,
    attributeOldValue: mergedOptions.attributeOldValue,
    characterDataOldValue: mergedOptions.characterDataOldValue,
    ...(mergedOptions.attributeFilter && {
      attributeFilter: mergedOptions.attributeFilter,
    }),
  }

  const observe = () => {
    if (observer) return

    observer = new MutationObserver(callback)

    targets.forEach((el) => {
      if (el) observer?.observe(el, mutationOptions)
    })

    result.observer = observer
    result.isActive = true
  }

  const disconnect = () => {
    if (!observer) return

    observer.disconnect()
    observer = null
    result.observer = null
    result.isActive = false
  }

  result.pause = () => {
    if (!observer) return

    observer.disconnect()
    result.isActive = false
  }

  result.resume = () => {
    if (!observer) {
      observe()
      return
    }

    targets.forEach((el) => {
      if (el) observer?.observe(el, mutationOptions)
    })
    result.isActive = true
  }

  result.stop = disconnect

  if (mergedOptions.immediate) {
    observe()
  }

  return result
}
