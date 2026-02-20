import { action } from 'storybook/actions'
import onLCP from '../../../packages/element-utils/src/onLCP'

export const createInitBasicDemo = (
  getStopFn: () => (() => void) | null,
  setStopFn: (fn: (() => void) | null) => void
) => {
  return () => {
    const prevStop = getStopFn()
    if (prevStop) prevStop()

    const stop = onLCP((metric) => {
      const entry = metric.entries[metric.entries.length - 1]
      action('LCP 指标')({
        时间: `${Math.round(metric.value)}ms`,
        元素: entry?.element?.tagName || '未知',
        大小: entry?.size || '未知',
        URL: entry?.url || '无',
        rating: metric.rating,
      })
    })

    setStopFn(stop)
    action('初始化成功')('LCP 将在页面隐藏时报告最终值，或切换标签页触发')
  }
}
