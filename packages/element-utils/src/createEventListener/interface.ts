/** 清理函数类型 */
export type CleanupFn = () => void

/** 事件监听器选项 */
export interface EventListenerOptions {
  /** 事件目标元素 */
  target: EventTarget | null
  /** 事件名称 */
  event: keyof WindowEventMap | string
  /** 事件处理函数 */
  handler: (event: Event) => void
  /** 事件选项 */
  options?: boolean | AddEventListenerOptions
}
