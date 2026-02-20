import { action } from 'storybook/actions'

export const createCleanupDemo = (
  getStopFn: () => (() => void) | null,
  clearStopFn: () => void
) => {
  return () => {
    const stopFn = getStopFn()
    if (stopFn) {
      stopFn()
      clearStopFn()
      action('监控已停止')('已停止所有指标监控')
    } else {
      action('无需清理')('当前没有正在运行的监控')
    }
  }
}

export default createCleanupDemo
