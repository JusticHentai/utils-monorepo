import type { IntersectionObserverOptions } from '../observer/interface'

/**
 * onEnterViewport 配置选项
 */
export type OnEnterViewportOptions = Omit<IntersectionObserverOptions, 'immediate'>
