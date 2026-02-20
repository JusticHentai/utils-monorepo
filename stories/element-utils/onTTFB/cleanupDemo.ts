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
      action('清理完成')('TTFB 监听已停止')
    } else {
      action('提示')('没有正在运行的监听')
    }
  }
}
