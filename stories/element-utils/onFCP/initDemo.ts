import { action } from 'storybook/actions'
import onFCP from '../../../packages/element-utils/src/onFCP'

export const createInitDemo = (
  getStopFn: () => (() => void) | null,
  setStopFn: (fn: (() => void) | null) => void
) => {
  return () => {
    const prevStop = getStopFn()
    if (prevStop) prevStop()

    const stop = onFCP((metric) => {
      action('FCP 指标')({
        时间: `${Math.round(metric.value)}ms`,
        名称: metric.name,
        rating: metric.rating,
      })
    })

    setStopFn(stop)
    action('初始化成功')('FCP 通常在页面加载时已经触发，刷新页面可看到效果')
  }
}
