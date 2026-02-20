import isBrowser from '../isBrowser'

/**
 * 检查是否支持 IntersectionObserver API
 * 用于元素可见性检测，常用于懒加载、曝光统计等场景
 *
 * @returns 是否支持 IntersectionObserver
 *
 * @example
 * ```ts
 * if (supportIntersectionObserver()) {
 *   const observer = new IntersectionObserver(callback)
 *   observer.observe(element)
 * }
 * ```
 */
const supportIntersectionObserver = (): boolean => {
  return isBrowser() && typeof IntersectionObserver !== 'undefined'
}

export default supportIntersectionObserver
