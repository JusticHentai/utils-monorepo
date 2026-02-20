import type { IntersectionObserverOptions } from '../observer/interface'

/**
 * createLazyLoadObserver 配置选项
 */
export type LazyLoadObserverOptions = Omit<IntersectionObserverOptions, 'immediate'>
