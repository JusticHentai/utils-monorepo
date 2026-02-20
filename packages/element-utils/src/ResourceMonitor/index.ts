import getLargeResources from './core/getLargeResources'
import getResourceMetrics from './core/getResourceMetrics'
import getResourceStats from './core/getResourceStats'
import getSlowResources from './core/getSlowResources'
import observeResource from './core/observeResource'
import type {
  ResourceCallback,
  ResourceFilter,
  ResourceMonitorOptions,
} from './interface'

/**
 * 资源加载监控
 *
 * 通过实例化时传入配置，后续所有操作自动应用：
 * ```ts
 * const monitor = new ResourceMonitor({ filter: myFilter })
 * monitor.observe(callback)    // 自动应用 filter
 * monitor.getMetrics()         // 自动应用 filter
 * monitor.getStats()           // 基于 getMetrics 结果
 * monitor.getSlowResources()   // 基于 getMetrics 结果
 * monitor.getLargeResources()  // 基于 getMetrics 结果
 * ```
 */
export default class ResourceMonitor {
  private filter?: ResourceFilter

  constructor(options?: ResourceMonitorOptions) {
    this.filter = options?.filter
  }

  /** 获取所有已加载的资源性能数据 */
  getMetrics = () => getResourceMetrics(this.filter)

  /** 获取资源统计信息 */
  getStats = () => getResourceStats(this.getMetrics())

  /** 获取慢资源 */
  getSlowResources = (threshold?: number) =>
    getSlowResources(this.getMetrics(), threshold)

  /** 获取大资源 */
  getLargeResources = (threshold?: number) =>
    getLargeResources(this.getMetrics(), threshold)

  /** 开始监控资源加载 */
  observe = (callback: ResourceCallback, options?: ResourceMonitorOptions) =>
    observeResource(callback, { filter: this.filter, ...options })
}
