import { action } from 'storybook/actions'
import onTTFB from '../../../packages/element-utils/src/onTTFB'

export const createInitDemo = (
  getStopFn: () => (() => void) | null,
  setStopFn: (fn: (() => void) | null) => void
) => {
  return () => {
    const prevStop = getStopFn()
    if (prevStop) prevStop()

    const stop = onTTFB((metric) => {
      const entry = metric.entries[0] as PerformanceNavigationTiming
      action('TTFB 指标')({
        TTFB: `${Math.round(metric.value)}ms`,
        DNS查询: `${Math.round((entry?.domainLookupEnd || 0) - (entry?.domainLookupStart || 0))}ms`,
        TCP连接: `${Math.round((entry?.connectEnd || 0) - (entry?.connectStart || 0))}ms`,
        rating: metric.rating,
        导航类型: metric.navigationType,
      })
    })

    setStopFn(stop ?? null)
    action('初始化成功')('TTFB 将在页面加载完成后报告')
  }
}
