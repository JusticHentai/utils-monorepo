import type { ResourceMetrics } from '../interface'

/**
 * 获取大资源
 * @param resources - 资源数据
 * @param threshold - 阈值（bytes），默认 500KB
 * @returns 大资源列表
 */
const getLargeResources = (
  resources: ResourceMetrics[],
  threshold = 500 * 1024
): ResourceMetrics[] => {
  return resources.filter((resource) => resource.transferSize > threshold)
}

export default getLargeResources
