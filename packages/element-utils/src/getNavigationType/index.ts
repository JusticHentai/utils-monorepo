import { ENTRY_TYPE } from '../WebVitalsMonitor/interface'
import {
  NAVIGATION_TYPE,
  NAVIGATION_TYPE_MAP,
  RAW_NAVIGATION_TYPE,
} from './interface'

/**
 * 获取页面导航类型
 * @returns 当前页面的导航类型
 */
const getNavigationType = (): NAVIGATION_TYPE => {
  if (typeof window === 'undefined') return NAVIGATION_TYPE.NAVIGATE

  const navigation = performance.getEntriesByType(
    ENTRY_TYPE.NAVIGATION
  )[0] as PerformanceNavigationTiming

  if (!navigation) return NAVIGATION_TYPE.NAVIGATE

  // 检查是否是 BFCache 恢复
  if (
    document.wasDiscarded ||
    (navigation.type === RAW_NAVIGATION_TYPE.BACK_FORWARD &&
      navigation.transferSize === 0)
  ) {
    return NAVIGATION_TYPE.BACK_FORWARD_CACHE
  }

  return NAVIGATION_TYPE_MAP[navigation.type] ?? NAVIGATION_TYPE.NAVIGATE
}

export default getNavigationType
