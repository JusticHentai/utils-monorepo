import { action } from 'storybook/actions'

export const createStopObserveDemo = (
  getStopFn: () => (() => void) | null,
  clearStopFn: () => void
) => {
  return () => {
    const stopFn = getStopFn()

    if (stopFn) {
      stopFn()
      clearStopFn()
      action('停止监听')('已停止资源加载监控')
    } else {
      action('停止监听')('当前没有正在运行的监听')
    }
  }
}
