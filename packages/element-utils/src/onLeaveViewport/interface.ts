import type { IntersectionObserverOptions } from '../observer/interface'

/**
 * onLeaveViewport 配置选项
 */
export type OnLeaveViewportOptions = Omit<IntersectionObserverOptions, 'immediate'>
