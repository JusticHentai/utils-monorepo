import { action } from 'storybook/actions'
import onScroll from '../../../packages/element-utils/src/onScroll'

export const createStartListenDemo = (
  getStopFn: () => (() => void) | null,
  setStopFn: (fn: (() => void) | null) => void
) => {
  return () => {
    // 如果已经在监听，先停止
    const prevStopFn = getStopFn()
    if (prevStopFn) prevStopFn()

    const container = document.getElementById(
      'scroll-container'
    ) as HTMLElement

    const stopFn = onScroll(
      container,
      ({ x, y, direction }) => {
        action('滚动事件')({ x, y, direction })
      },
      { immediate: true }
    )

    setStopFn(stopFn)
    action('开始监听')('已开始监听滚动容器')
  }
}

export const createStopListenDemo = (
  getStopFn: () => (() => void) | null,
  clearStopFn: () => void
) => {
  return () => {
    const stopFn = getStopFn()
    if (stopFn) {
      stopFn()
      clearStopFn()
      action('停止监听')('已停止监听滚动')
    } else {
      action('停止监听')('当前没有监听中的滚动事件')
    }
  }
}
