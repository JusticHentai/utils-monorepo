import { action } from 'storybook/actions'
import onLCP from '../../../packages/element-utils/src/onLCP'

export const createInitAllChangesDemo = (
  getStopFn: () => (() => void) | null,
  setStopFn: (fn: (() => void) | null) => void
) => {
  return () => {
    const prevStop = getStopFn()
    if (prevStop) prevStop()

    const stop = onLCP(
      (metric) => {
        const entry = metric.entries[metric.entries.length - 1]
        action('LCP 变化')({
          时间: `${Math.round(metric.value)}ms`,
          元素: entry?.element?.tagName || '未知',
          rating: metric.rating,
        })
      },
      { reportAllChanges: true }
    )

    setStopFn(stop)
    action('初始化成功（报告所有变化）')('每次 LCP 候选元素变化都会触发回调')
  }
}
