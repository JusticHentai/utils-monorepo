import { action } from 'storybook/actions'
import onFCP from '../../../packages/element-utils/src/onFCP'

export const createInitMetricDemo = (
  getStopFn: () => (() => void) | null,
  setStopFn: (fn: (() => void) | null) => void
) => {
  return () => {
    const prevStop = getStopFn()
    if (prevStop) prevStop()

    const stop = onFCP((metric) => {
      // metric 包含完整信息：name, value, rating, delta, id, navigationType, entries
      action('FCP Metric')({
        name: metric.name,
        value: `${Math.round(metric.value)}ms`,
        rating: metric.rating,
        delta: `${Math.round(metric.delta)}ms`,
        id: metric.id,
        navigationType: metric.navigationType,
      })
    })

    setStopFn(stop)
    action('初始化成功')('FCP Metric 监控中...')
  }
}
