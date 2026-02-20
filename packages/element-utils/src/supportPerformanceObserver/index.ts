import isBrowser from '../isBrowser'

/**
 * 检查是否支持 PerformanceObserver API
 * 用于监听性能相关指标，如 LCP、FCP、CLS 等
 *
 * @returns 是否支持 PerformanceObserver
 *
 * @example
 * ```ts
 * if (supportPerformanceObserver()) {
 *   const observer = new PerformanceObserver(list => {
 *     list.getEntries().forEach(entry => {
 *       console.log('性能条目:', entry)
 *     })
 *   })
 *   observer.observe({ type: 'paint', buffered: true })
 * }
 * ```
 */
const supportPerformanceObserver = (): boolean => {
  return isBrowser() && typeof PerformanceObserver !== 'undefined'
}

/**
 * 检查是否支持特定的 PerformanceObserver entry type
 * @param type - entry 类型，如 'paint', 'largest-contentful-paint' 等
 * @returns 是否支持该类型
 *
 * @example
 * ```ts
 * if (supportEntryType('largest-contentful-paint')) {
 *   // 监控 LCP
 * }
 * ```
 */
export const supportEntryType = (type: string): boolean => {
  if (!supportPerformanceObserver()) return false

  try {
    const supportedTypes = PerformanceObserver.supportedEntryTypes || []
    return supportedTypes.includes(type)
  } catch {
    return false
  }
}

/**
 * 获取所有支持的 PerformanceObserver entry types
 * @returns 支持的 entry 类型数组
 *
 * @example
 * ```ts
 * const types = getSupportedEntryTypes()
 * console.log('支持的类型:', types)
 * // ['element', 'event', 'first-input', 'largest-contentful-paint', ...]
 * ```
 */
export const getSupportedEntryTypes = (): readonly string[] => {
  if (!supportPerformanceObserver()) return []

  try {
    return PerformanceObserver.supportedEntryTypes || []
  } catch {
    return []
  }
}

export default supportPerformanceObserver
