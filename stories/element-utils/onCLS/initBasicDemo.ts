import { action } from 'storybook/actions'
import onCLS from '../../../packages/element-utils/src/onCLS'

export const createInitBasicDemo = (
  getStopFn: () => (() => void) | null,
  setStopFn: (fn: (() => void) | null) => void
) => {
  return () => {
    const prevStop = getStopFn()
    if (prevStop) prevStop()

    const stop = onCLS((metric) => {
      action('CLS 指标')({
        累积值: metric.value.toFixed(4),
        偏移次数: metric.entries.length,
        rating: metric.rating,
      })
    })

    setStopFn(stop)
    action('初始化成功')('CLS 将在页面隐藏时报告最终值，或切换标签页触发')
  }
}
