/**
 * Observer 统一观察器工具库
 *
 * 参考库:
 * - VueUse (@vueuse/core): https://vueuse.org/
 * - react-use: https://github.com/streamich/react-use
 * - Web APIs: IntersectionObserver, MutationObserver, ResizeObserver, PerformanceObserver
 */

// ==================== 通用类型 ====================

/**
 * 观察器清理函数
 */
export type CleanupFn = () => void

/**
 * 可暂停的观察器实例
 */
export interface PausableObserver<T = unknown> {
  /** 观察器实例 */
  observer: T | null
  /** 是否正在观察 */
  isActive: boolean
  /** 暂停观察 */
  pause: () => void
  /** 恢复观察 */
  resume: () => void
  /** 停止并断开观察器 */
  stop: CleanupFn
}

// ==================== IntersectionObserver ====================

/**
 * 元素可见性回调参数
 */
export interface IntersectionCallbackParams {
  /** 目标元素 */
  target: Element
  /** 是否相交/可见 */
  isIntersecting: boolean
  /** 相交比例 0-1 */
  intersectionRatio: number
  /** 原始 entry */
  entry: IntersectionObserverEntry
}

/**
 * IntersectionObserver 配置选项
 * @see https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/IntersectionObserver
 */
export interface IntersectionObserverOptions {
  /**
   * 根元素，默认为 viewport
   */
  root?: Element | Document | null
  /**
   * 根元素的边距，格式同 CSS margin
   * @example '10px 20px 30px 40px'
   */
  rootMargin?: string
  /**
   * 触发回调的阈值，0-1 之间的数字或数组
   * @default 0
   */
  threshold?: number | number[]
  /**
   * 是否立即开始观察
   * @default true
   */
  immediate?: boolean
}

/**
 * IntersectionObserver 回调函数
 */
export type IntersectionCallback = (params: IntersectionCallbackParams) => void

// ==================== MutationObserver ====================

/**
 * MutationObserver 配置选项
 * @see https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver/observe
 */
export interface MutationObserverOptions {
  /**
   * 监听子节点的添加或删除
   * @default true
   */
  childList?: boolean
  /**
   * 监听属性变化
   * @default true
   */
  attributes?: boolean
  /**
   * 监听文本内容变化
   * @default false
   */
  characterData?: boolean
  /**
   * 是否监听整个子树
   * @default true
   */
  subtree?: boolean
  /**
   * 记录变化前的属性值
   * @default false
   */
  attributeOldValue?: boolean
  /**
   * 记录变化前的文本内容
   * @default false
   */
  characterDataOldValue?: boolean
  /**
   * 要监听的属性名列表
   */
  attributeFilter?: string[]
  /**
   * 是否立即开始观察
   * @default true
   */
  immediate?: boolean
}

/**
 * MutationObserver 回调函数
 */
export type MutationCallback = (
  mutations: MutationRecord[],
  observer: MutationObserver
) => void

// ==================== ResizeObserver ====================

/**
 * ResizeObserver 尺寸信息
 */
export interface ResizeCallbackParams {
  /** 目标元素 */
  target: Element
  /** 内容区域宽度 */
  width: number
  /** 内容区域高度 */
  height: number
  /** 边框区域宽度 */
  borderBoxWidth: number
  /** 边框区域高度 */
  borderBoxHeight: number
  /** 内容区域宽度（设备像素） */
  devicePixelContentBoxWidth: number
  /** 内容区域高度（设备像素） */
  devicePixelContentBoxHeight: number
  /** 原始 entry */
  entry: ResizeObserverEntry
}

/**
 * ResizeObserver 配置选项
 */
export interface ResizeObserverOptions {
  /**
   * 盒模型类型
   * @default 'content-box'
   */
  box?: ResizeObserverBoxOptions
  /**
   * 是否立即开始观察
   * @default true
   */
  immediate?: boolean
}

/**
 * ResizeObserver 回调函数
 */
export type ResizeCallback = (params: ResizeCallbackParams) => void

// ==================== PerformanceObserver ====================

/**
 * PerformanceObserver 配置选项
 */
export interface PerformanceObserverOptions {
  /**
   * 是否缓冲之前的条目
   * @default true
   */
  buffered?: boolean
  /**
   * 持续时间阈值（毫秒），仅对 event 类型有效
   */
  durationThreshold?: number
  /**
   * 是否立即开始观察
   * @default true
   */
  immediate?: boolean
}

/**
 * PerformanceObserver 回调函数
 */
export type PerformanceCallback<T extends PerformanceEntry = PerformanceEntry> =
  (entries: T[]) => void

// ==================== 常用性能指标类型 ====================

/**
 * 支持的性能指标类型
 */
export type PerformanceEntryType =
  | 'element'
  | 'event'
  | 'first-input'
  | 'largest-contentful-paint'
  | 'layout-shift'
  | 'longtask'
  | 'mark'
  | 'measure'
  | 'navigation'
  | 'paint'
  | 'resource'
  | 'visibility-state'

// ==================== 默认配置 ====================

export const defaultIntersectionOptions: IntersectionObserverOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0,
  immediate: true,
}

export const defaultMutationOptions: MutationObserverOptions = {
  childList: true,
  attributes: true,
  characterData: false,
  subtree: true,
  attributeOldValue: false,
  characterDataOldValue: false,
  immediate: true,
}

export const defaultResizeOptions: ResizeObserverOptions = {
  box: 'content-box',
  immediate: true,
}

export const defaultPerformanceOptions: PerformanceObserverOptions = {
  buffered: true,
  immediate: true,
}
