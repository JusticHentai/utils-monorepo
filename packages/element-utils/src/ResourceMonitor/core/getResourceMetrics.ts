import { ENTRY_TYPE } from '../../WebVitalsMonitor/interface'
import type { ResourceFilter, ResourceMetrics } from '../interface'
import parseResourceEntry from './parseResourceEntry'

/**
 * 获取所有已加载的资源性能数据
 * @param filter - 过滤函数（可选）
 * @returns 资源性能指标数组
 */
const getResourceMetrics = (filter?: ResourceFilter): ResourceMetrics[] => {
  const entries = performance.getEntriesByType(
    ENTRY_TYPE.RESOURCE
  ) as PerformanceResourceTiming[]

  const filteredEntries = filter ? entries.filter(filter) : entries

  return filteredEntries.map(parseResourceEntry)
}

export default getResourceMetrics
