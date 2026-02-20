import isBrowser from '../isBrowser'

/**
 * 检查是否支持 requestIdleCallback API
 * 用于在浏览器空闲时执行低优先级任务
 *
 * @returns 是否支持 requestIdleCallback
 *
 * @example
 * ```ts
 * if (supportRequestIdleCallback()) {
 *   requestIdleCallback(() => {
 *     // 低优先级任务
 *     console.log('浏览器空闲时执行')
 *   })
 * } else {
 *   // 降级使用 setTimeout
 *   setTimeout(() => {
 *     console.log('降级执行')
 *   }, 0)
 * }
 * ```
 */
const supportRequestIdleCallback = (): boolean => {
  return isBrowser() && typeof window.requestIdleCallback !== 'undefined'
}

export default supportRequestIdleCallback
