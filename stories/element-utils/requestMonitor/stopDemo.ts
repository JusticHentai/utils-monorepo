import { action } from 'storybook/actions'
import { monitor } from './observeAllDemo'

export const createStopDemo = (
  getStopFn: () => (() => void) | null,
  clearStopFn: () => void
) => {
  return () => {
    const stopFn = getStopFn()
    if (stopFn) {
      monitor.stop()
      clearStopFn()
      action('停止监控')('已停止所有请求监控')
    } else {
      action('停止监控')('当前没有正在运行的监控')
    }
  }
}
