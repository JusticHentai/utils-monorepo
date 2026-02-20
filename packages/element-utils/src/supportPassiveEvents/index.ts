import isBrowser from '../isBrowser'

/**
 * 检查是否支持被动事件监听器 (passive event listeners)
 * 被动监听器可以提升滚动性能，因为它不会调用 preventDefault()
 *
 * @returns 是否支持 passive 事件选项
 *
 * @example
 * ```ts
 * const options = supportPassiveEvents()
 *   ? { passive: true }
 *   : false
 *
 * element.addEventListener('touchstart', handler, options)
 * ```
 */
const supportPassiveEvents = (): boolean => {
  if (!isBrowser()) return false

  let supportsPassive = false
  try {
    const opts = Object.defineProperty({}, 'passive', {
      get() {
        supportsPassive = true
        return true
      },
    })
    window.addEventListener('testPassive', null as unknown as EventListener, opts)
    window.removeEventListener('testPassive', null as unknown as EventListener, opts)
  } catch {
    supportsPassive = false
  }
  return supportsPassive
}

export default supportPassiveEvents
