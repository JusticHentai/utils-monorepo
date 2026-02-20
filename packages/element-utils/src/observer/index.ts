/**
 * Observer 统一观察器工具库
 *
 * 整合了多种浏览器观察器的统一封装：
 * - IntersectionObserver: 元素可见性检测
 * - MutationObserver: DOM 变化监听
 * - ResizeObserver: 元素尺寸变化监听
 * - PerformanceObserver: 性能指标监听
 */

// ==================== 类型导出 ====================
export type {
  // 通用类型
  CleanupFn,
  // IntersectionObserver
  IntersectionCallback,
  IntersectionCallbackParams,
  IntersectionObserverOptions,
  // MutationObserver
  MutationCallback,
  MutationObserverOptions,
  PausableObserver,
  // PerformanceObserver
  PerformanceCallback,
  PerformanceEntryType,
  PerformanceObserverOptions,
  // ResizeObserver
  ResizeCallback,
  ResizeCallbackParams,
  ResizeObserverOptions,
} from './interface'

// ==================== IntersectionObserver ====================
export { createIntersectionObserver } from './core/intersectionObserver'

// ==================== MutationObserver ====================
export { createMutationObserver } from './core/mutationObserver'

// ==================== ResizeObserver ====================
export { createResizeObserver } from './core/resizeObserver'

// ==================== PerformanceObserver ====================
export { createPerformanceObserver } from './core/performanceObserver'
