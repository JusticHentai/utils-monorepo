import isBrowser from '../isBrowser'

/**
 * 检查是否支持 ResizeObserver API
 * 用于监听元素尺寸变化，比 window.resize 更精确
 *
 * @returns 是否支持 ResizeObserver
 *
 * @example
 * ```ts
 * if (supportResizeObserver()) {
 *   const observer = new ResizeObserver(entries => {
 *     entries.forEach(entry => {
 *       console.log('尺寸变化:', entry.contentRect)
 *     })
 *   })
 *   observer.observe(element)
 * }
 * ```
 */
const supportResizeObserver = (): boolean => {
  return isBrowser() && typeof ResizeObserver !== 'undefined'
}

export default supportResizeObserver
