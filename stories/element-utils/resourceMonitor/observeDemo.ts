import { action } from 'storybook/actions'
import ResourceMonitor from '../../../packages/element-utils/src/ResourceMonitor'

const monitor = new ResourceMonitor()

export const createObserveDemo = (
  getStopFn: () => (() => void) | null,
  setStopFn: (fn: (() => void) | null) => void
) => {
  return () => {
    const prevStop = getStopFn()
    if (prevStop) prevStop()

    const stop = monitor.observe((resources) => {
      action('资源加载回调')(resources)
    })

    setStopFn(stop)
    action('开始监听')('已启动资源加载监控，新加载的资源将批量回调上报')
  }
}
