import { action } from 'storybook/actions'
import scrollBottom from '../../../packages/element-utils/src/scrollBottom'

let cleanup: (() => void) | null = null

export const initThrottleDemo = (element: HTMLElement) => {
  if (cleanup) {
    cleanup()
  }

  cleanup = scrollBottom(
    element,
    () => {
      action('滚动回调')('滚动到底部（节流 100ms）')
    },
    { threshold: 30, throttle: 100 }
  )

  action('添加滚动监听（带节流）')('已添加滚动监听（阈值 30px，节流 100ms）')
}

export const removeThrottleDemo = () => {
  if (cleanup) {
    cleanup()
    cleanup = null
    action('移除滚动监听')('已移除节流滚动监听')
  } else {
    action('提示')('未添加监听')
  }
}
