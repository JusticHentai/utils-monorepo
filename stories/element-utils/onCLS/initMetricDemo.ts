import { action } from 'storybook/actions'
import onCLS from '../../../packages/element-utils/src/onCLS'

export const createInitMetricDemo = (
  getStopFn: () => (() => void) | null,
  setStopFn: (fn: (() => void) | null) => void
) => {
  return () => {
    const prevStop = getStopFn()
    if (prevStop) prevStop()

    const stop = onCLS((metric) => {
      // metric 包含完整信息：name, value, rating, delta, id, navigationType, entries
      action('CLS Metric')({
        name: metric.name,
        value: metric.value.toFixed(4),
        rating: metric.rating,
        delta: metric.delta.toFixed(4),
        id: metric.id,
        navigationType: metric.navigationType,
        entriesCount: metric.entries.length,
      })
    })

    setStopFn(stop)
    action('初始化成功')('CLS Metric 监控中，触发布局偏移可观察变化...')
  }
}
