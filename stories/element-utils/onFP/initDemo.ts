import { action } from 'storybook/actions'
import onFP from '../../../packages/element-utils/src/onFP'

export const createInitDemo = (
  getStopFn: () => (() => void) | null,
  setStopFn: (fn: (() => void) | null) => void
) => {
  return () => {
    const prevStop = getStopFn()
    if (prevStop) prevStop()

    const stop = onFP((metric) => {
      action('FP 指标')({
        时间: `${Math.round(metric.value)}ms`,
        名称: metric.name,
        rating: metric.rating,
      })
    })

    setStopFn(stop)
    action('初始化成功')('FP 将在首次绘制时报告')
  }
}
