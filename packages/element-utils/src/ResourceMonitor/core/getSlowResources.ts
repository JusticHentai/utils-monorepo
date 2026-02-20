import type { ResourceMetrics } from '../interface'

/**
 * 获取慢资源
 * @param resources - 资源数据
 * @param threshold - 阈值（ms），默认 1000
 * @returns 慢资源列表
 */
const getSlowResources = (
  resources: ResourceMetrics[],
  threshold = 1000
): ResourceMetrics[] => {
  return resources.filter((resource) => resource.duration > threshold)
}

export default getSlowResources
