import createEventListener from '../createEventListener'
import getMetricRating from '../getMetricRating'
import { METRIC_NAME } from '../getMetricRating/interface'
import getNavigationType from '../getNavigationType'
import { NAVIGATION_TYPE } from '../getNavigationType/interface'
import { ENTRY_TYPE } from '../WebVitalsMonitor/interface'
import onBFCacheRestore from '../onBFCacheRestore'
import uniqueId from '../uniqueId'
import type { OnTTFBMetricCallback, TTFBMetric } from './interface'

/**
 * 监听 TTFB (Time to First Byte)
 *
 * TTFB 衡量从请求开始到收到第一个字节的时间
 *
 * @param callback - TTFB 回调函数，接收完整的 TTFBMetric 对象
 * @returns 清理函数
 */
const onTTFB = (callback: OnTTFBMetricCallback): (() => void) => {
  let reported = false

  const report = () => {
    if (reported) return

    const navigationEntry = performance.getEntriesByType(
      ENTRY_TYPE.NAVIGATION
    )[0] as PerformanceNavigationTiming

    if (!navigationEntry) return

    const value = navigationEntry.responseStart

    if (value <= 0) return

    reported = true

    const metric: TTFBMetric = {
      name: METRIC_NAME.TTFB,
      value,
      delta: value,
      rating: getMetricRating(METRIC_NAME.TTFB, value),
      id: uniqueId(),
      navigationType: getNavigationType(),
      entries: [navigationEntry],
    }

    callback(metric)
  }

  // 如果 document 已经加载完成，直接上报
  if (document.readyState === 'complete') {
    setTimeout(report, 0)
  } else {
    const stopLoad = createEventListener(window, 'load', report, { once: true })

    // BFCache 恢复时重新上报
    const stopBFCache = onBFCacheRestore((event: PageTransitionEvent) => {
      const metric: TTFBMetric = {
        name: METRIC_NAME.TTFB,
        value: performance.now() - event.timeStamp,
        delta: 0,
        rating: getMetricRating(METRIC_NAME.TTFB, 0),
        id: uniqueId(),
        navigationType: NAVIGATION_TYPE.BACK_FORWARD_CACHE,
        entries: [],
      }

      callback(metric)
    })

    return () => {
      stopLoad()
      stopBFCache()
    }
  }

  // BFCache 恢复时重新上报
  const stopBFCache = onBFCacheRestore((event: PageTransitionEvent) => {
    const metric: TTFBMetric = {
      name: METRIC_NAME.TTFB,
      value: performance.now() - event.timeStamp,
      delta: 0,
      rating: getMetricRating(METRIC_NAME.TTFB, 0),
      id: uniqueId(),
      navigationType: NAVIGATION_TYPE.BACK_FORWARD_CACHE,
      entries: [],
    }

    callback(metric)
  })

  return () => {
    stopBFCache()
  }
}

export default onTTFB
