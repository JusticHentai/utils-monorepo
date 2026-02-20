import { createIntersectionObserver } from '../observer'
import type { LazyLoadObserverOptions } from './interface'

/**
 * 创建懒加载观察器
 *
 * @param elements - 要懒加载的元素
 * @param loadFn - 加载函数，接收元素作为参数
 * @param options - 观察器配置选项
 * @returns 清理函数
 */
const createLazyLoadObserver = (
  elements: Element[],
  loadFn: (element: Element) => void,
  options?: LazyLoadObserverOptions
): (() => void) => {
  const loaded = new WeakSet<Element>()

  const { stop, observer } = createIntersectionObserver(
    elements,
    ({ target, isIntersecting }) => {
      if (!isIntersecting) return
      if (loaded.has(target)) return

      loaded.add(target)
      loadFn(target)
      observer?.unobserve(target)
    },
    { ...options, immediate: true }
  )

  return stop
}

export default createLazyLoadObserver
