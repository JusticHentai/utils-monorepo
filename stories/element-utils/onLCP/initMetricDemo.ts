import { action } from 'storybook/actions'
import onLCP from '../../../packages/element-utils/src/onLCP'

export const createInitMetricDemo = (
  getStopFn: () => (() => void) | null,
  setStopFn: (fn: (() => void) | null) => void
) => {
  return () => {
    const prevStop = getStopFn()
    if (prevStop) prevStop()

    const stop = onLCP((metric) => {
      // metric 包含完整信息：name, value, rating, delta, id, navigationType, entries
      const entry = metric.entries[metric.entries.length - 1]

      action('LCP Metric')({
        name: metric.name,
        value: `${Math.round(metric.value)}ms`,
        rating: metric.rating,
        delta: `${Math.round(metric.delta)}ms`,
        id: metric.id,
        navigationType: metric.navigationType,
        element: entry?.element?.tagName || '未知',
      })
    })

    setStopFn(stop)
    action('初始化成功')('LCP Metric 监控中，等待页面隐藏时报告...')
  }
}
