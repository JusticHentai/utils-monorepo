import { action } from 'storybook/actions'
import onCLS from '../../../packages/element-utils/src/onCLS'

export const createInitAllChangesDemo = (
  getStopFn: () => (() => void) | null,
  setStopFn: (fn: (() => void) | null) => void
) => {
  return () => {
    const prevStop = getStopFn()
    if (prevStop) prevStop()

    const stop = onCLS(
      (metric) => {
        action('CLS 变化')({
          当前值: metric.value.toFixed(4),
          偏移次数: metric.entries.length,
          rating: metric.rating,
        })
      },
      { reportAllChanges: true }
    )

    setStopFn(stop)
    action('初始化成功（报告所有变化）')('每次布局偏移都会触发回调')
  }
}
