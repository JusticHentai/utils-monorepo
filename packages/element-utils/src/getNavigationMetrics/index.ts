/**
 * 获取导航基础性能信息
 * 基于 Navigation Timing API 计算各阶段耗时
 */

import type { NavigationMetrics } from './interface'

const ENTRY_TYPE = 'navigation'

/**
 * 获取导航性能指标
 * @returns 导航性能指标，如果不可用则返回 undefined
 */
const getNavigationMetrics = (): NavigationMetrics | undefined => {
  if (typeof performance === 'undefined') {
    return undefined
  }

  const navigationEntries = performance.getEntriesByType(ENTRY_TYPE)

  if (!navigationEntries?.length) {
    return undefined
  }

  const navigation = navigationEntries[0] as PerformanceNavigationTiming

  const unload = navigation.unloadEventEnd - navigation.unloadEventStart
  const dnsCache = navigation.domainLookupStart - navigation.fetchStart
  const dns = navigation.domainLookupEnd - navigation.domainLookupStart
  const tcp = navigation.connectEnd - navigation.connectStart
  const tls =
    navigation.secureConnectionStart > 0
      ? navigation.connectEnd - navigation.secureConnectionStart
      : 0
  const ttfb = navigation.responseStart - navigation.requestStart
  const trans = navigation.responseEnd - navigation.responseStart

  const domParse = navigation.domInteractive - navigation.responseEnd
  const domComplete = navigation.domComplete - navigation.domInteractive

  const loadEvent = navigation.loadEventEnd - navigation.loadEventStart

  const redirect = navigation.redirectEnd - navigation.redirectStart
  const request = navigation.responseStart - navigation.requestStart
  const response = navigation.responseEnd - navigation.responseStart
  const domReady = navigation.domContentLoadedEventEnd - navigation.fetchStart
  const pageLoad = navigation.loadEventEnd - navigation.fetchStart

  return {
    unload,
    dnsCache,
    dns,
    tcp,
    tls,
    ttfb,
    trans,
    domParse,
    domComplete,
    loadEvent,
    redirect,
    request,
    response,
    domReady,
    pageLoad,
  }
}

export default getNavigationMetrics
