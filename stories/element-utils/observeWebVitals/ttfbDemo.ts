import { action } from 'storybook/actions'
import observeWebVitals from '../../../packages/element-utils/src/observeWebVitals'
import { METRIC_NAME } from '../../../packages/element-utils/src/observeWebVitals/interface'

export const createTtfbDemo = (
  getStopFn: () => (() => void) | null,
  setStopFn: (fn: (() => void) | null) => void
) => {
  return () => {
    const prevStop = getStopFn()
    if (prevStop) prevStop()

    const stop = observeWebVitals((metric) => {
      // 只展示 TTFB 指标
      if (metric.name !== METRIC_NAME.TTFB) return

      const entry = metric.entries[0] as PerformanceNavigationTiming

      action('TTFB 指标')({
        value: `${metric.value.toFixed(2)} ms`,
        rating: metric.rating,
        delta: metric.delta,
        id: metric.id,
        navigationType: metric.navigationType,
        dnsLookup: `${((entry?.domainLookupEnd || 0) - (entry?.domainLookupStart || 0)).toFixed(2)} ms`,
        tcpConnect: `${((entry?.connectEnd || 0) - (entry?.connectStart || 0)).toFixed(2)} ms`,
      })
    })

    setStopFn(stop)
    action('TTFB 监控已启动')('TTFB 在页面加载完成后报告')
  }
}

export default createTtfbDemo
