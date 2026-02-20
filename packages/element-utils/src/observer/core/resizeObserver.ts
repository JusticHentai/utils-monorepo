import supportResizeObserver from '../../supportResizeObserver'
import type {
  PausableObserver,
  ResizeCallback,
  ResizeCallbackParams,
  ResizeObserverOptions,
} from '../interface'
import { defaultResizeOptions } from '../interface'

/**
 * 创建 ResizeObserver 监听元素尺寸变化
 *
 * @param target - 要观察的目标元素或元素数组
 * @param callback - 尺寸变化时的回调函数
 * @param options - 观察器配置选项
 * @returns 可暂停的观察器实例
 */
export const createResizeObserver = (
  target: Element | Element[] | null,
  callback: ResizeCallback,
  options?: ResizeObserverOptions
): PausableObserver<ResizeObserver> => {
  const mergedOptions = { ...defaultResizeOptions, ...options }

  const result: PausableObserver<ResizeObserver> = {
    observer: null,
    isActive: false,
    pause: () => {},
    resume: () => {},
    stop: () => {},
  }

  if (!supportResizeObserver()) {
    console.warn('[observer] ResizeObserver is not supported')
    return result
  }

  if (!target) {
    console.warn('[observer] Target element is required')
    return result
  }

  const targets = Array.isArray(target) ? target : [target]
  let observer: ResizeObserver | null = null

  const handleResize: ResizeObserverCallback = (entries) => {
    entries.forEach((entry) => {
      // 获取内容盒尺寸
      const contentBoxSize = entry.contentBoxSize?.[0] || entry.contentBoxSize
      const borderBoxSize = entry.borderBoxSize?.[0] || entry.borderBoxSize
      const devicePixelContentBoxSize =
        entry.devicePixelContentBoxSize?.[0] || entry.devicePixelContentBoxSize

      const params: ResizeCallbackParams = {
        target: entry.target,
        width: contentBoxSize?.inlineSize || entry.contentRect.width,
        height: contentBoxSize?.blockSize || entry.contentRect.height,
        borderBoxWidth: borderBoxSize?.inlineSize || entry.contentRect.width,
        borderBoxHeight: borderBoxSize?.blockSize || entry.contentRect.height,
        devicePixelContentBoxWidth: devicePixelContentBoxSize?.inlineSize || 0,
        devicePixelContentBoxHeight: devicePixelContentBoxSize?.blockSize || 0,
        entry,
      }

      callback(params)
    })
  }

  const observe = () => {
    if (observer) return

    observer = new ResizeObserver(handleResize)

    targets.forEach((el) => {
      if (el) {
        observer?.observe(el, { box: mergedOptions.box })
      }
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
      if (el) observer?.observe(el, { box: mergedOptions.box })
    })
    result.isActive = true
  }

  result.stop = disconnect

  if (mergedOptions.immediate) {
    observe()
  }

  return result
}
