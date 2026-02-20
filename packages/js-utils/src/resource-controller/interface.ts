/**
 * 资源控制器
 * 用于管理单个资源的异步加载状态和结果
 */
export interface Resource {
  /** 完成通知函数，资源加载完成后调用以通知所有等待者 */
  resolve: (...params: any[]) => void
  /** 等待 Promise，外部可以 await 此 Promise 来等待资源加载完成 */
  promise: Promise<any>
  /** 资源加载完成后的结果数据 */
  current?: any
}

/**
 * 资源映射表
 * key 为资源名称，value 为资源项
 */
export type ResourceMap = Record<string, Resource>

/**
 * 资源配置选项
 */
export interface ResourceOptions {
  /** 资源唯一标识名称 */
  name: string
  /** 资源加载函数，返回 Promise */
  loadFn: (...params: any[]) => Promise<any>
  /** 优先级，数值越小优先级越高，相同优先级的资源会并行加载 */
  priority?: number
}

/**
 * 加载队列
 * 用于管理不同优先级的资源加载顺序
 *
 * 数据结构说明：
 * - 使用 Map 以优先级为 key，资源数组为 value，提供 O(1) 的查找性能
 * - 使用 sortedPriorities 维护排序后的优先级列表，避免每次都排序
 * - 优先级越小越先执行（如：1 > 2 > 3）
 * - 支持动态添加和并发限制
 */
export interface LoadQueue {
  /** 优先级资源映射表，key 为优先级，value 为该优先级下的资源数组 */
  priorityGroups: Map<number, ResourceOptions[]>
  /** 已排序的优先级数字列表，按从小到大排序 */
  sortedPriorities: number[]
}

/**
 * 正在执行的任务信息
 */
export interface RunningTask {
  /** 任务名称 */
  name: string
  /** 任务优先级 */
  priority: number
  /** 任务 Promise */
  promise: Promise<any>
}

/**
 * 资源控制器配置选项
 */
export interface ResourceControllerOptions {
  /** 最大并发数，默认为 3 */
  maxConcurrency?: number
}
