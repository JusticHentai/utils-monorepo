import createBatch from '@justichentai/js-utils/createBatch'
import createEventListener from '../../createEventListener'
import { createPerformanceObserver } from '../../observer'
import { ENTRY_TYPE } from '../../WebVitalsMonitor/interface'
import type {
  ResourceCallback,
  ResourceMetrics,
  ResourceMonitorOptions,
} from '../interface'
import parseResourceEntry from './parseResourceEntry'

/**
 * 开始监控资源加载
 * @param callback - 资源加载回调函数
 * @param options - 配置选项
 * @returns 停止监听函数
 */
const observeResource = (
  callback: ResourceCallback,
  options?: ResourceMonitorOptions
): (() => void) => {
  const { filter, batchSize = 10, batchDelay = 1000 } = options || {}

  const { flush, add } = createBatch<ResourceMetrics>(callback, {
    batchSize,
    batchDelay,
  })

  // 监听资源加载（buffered 默认为 true，自动回放已有资源）
  const handleEntries = (entries: PerformanceResourceTiming[]) => {
    const filteredEntries = filter ? entries.filter(filter) : entries
    const resources = filteredEntries.map(parseResourceEntry)

    if (resources.length === 0) {
      return
    }

    add(resources)
  }

  const { isActive, stop: stopObserver } =
    createPerformanceObserver<PerformanceResourceTiming>(
      ENTRY_TYPE.RESOURCE,
      handleEntries
    )

  if (!isActive) {
    return () => {}
  }

  // 页面卸载时刷新批次
  const removePageHideListener = createEventListener(window, 'pagehide', flush)

  return () => {
    flush()
    stopObserver()
    removePageHideListener()
  }
}

export default observeResource
