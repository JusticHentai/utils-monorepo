import { action } from 'storybook/actions'
import onScroll from '../../../packages/element-utils/src/onScroll'

export const createThrottleDemo = (
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
        action('节流滚动事件')({ x, y, direction, throttle: '100ms' })
      },
      { throttle: 100, immediate: true }
    )

    setStopFn(stopFn)
    action('开始节流监听')('已开始节流监听滚动容器（100ms）')
  }
}

export const createStopThrottleDemo = (
  getStopFn: () => (() => void) | null,
  clearStopFn: () => void
) => {
  return () => {
    const stopFn = getStopFn()
    if (stopFn) {
      stopFn()
      clearStopFn()
      action('停止节流监听')('已停止节流监听滚动')
    } else {
      action('停止节流监听')('当前没有节流监听中的滚动事件')
    }
  }
}
