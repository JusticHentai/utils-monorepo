import isBrowser from '../isBrowser'
import type { CleanupFn } from './interface'

/**
 * 创建事件监听器
 *
 * 封装原生 addEventListener/removeEventListener，返回清理函数便于管理事件生命周期。
 *
 * @param target - 事件目标（window、document、Element 等）
 * @param event - 事件名称
 * @param handler - 事件处理函数
 * @param options - 事件选项（capture、passive、once 等）
 * @returns 清理函数，调用后移除事件监听
 */
const createEventListener = <K extends keyof WindowEventMap>(
  target: EventTarget | null,
  event: K | string,
  handler: (event: WindowEventMap[K]) => void,
  options?: boolean | AddEventListenerOptions
): CleanupFn => {
  // 非浏览器环境或目标为空时，返回空函数
  if (!isBrowser() || !target) return () => {}

  target.addEventListener(event, handler as EventListener, options)

  return () => {
    target.removeEventListener(event, handler as EventListener, options)
  }
}

export default createEventListener
