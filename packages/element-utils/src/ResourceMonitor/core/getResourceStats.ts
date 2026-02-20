import type { ResourceMetrics, ResourceStats } from '../interface'

/**
 * 获取资源统计信息
 * @param resources - 资源数据
 * @returns 资源统计结果
 */
const getResourceStats = (resources: ResourceMetrics[]): ResourceStats => {
  const byType: Record<
    string,
    { count: number; size: number; duration: number }
  > = {}

  let cached = 0
  let totalSize = 0
  let totalDuration = 0

  for (const resource of resources) {
    if (resource.fromCache) cached++
    totalSize += resource.transferSize
    totalDuration += resource.duration

    const type = resource.initiatorType
    if (!byType[type]) {
      byType[type] = { count: 0, size: 0, duration: 0 }
    }
    byType[type].count++
    byType[type].size += resource.transferSize
    byType[type].duration += resource.duration
  }

  return {
    total: resources.length,
    cached,
    totalSize,
    totalDuration,
    byType,
  }
}

export default getResourceStats
