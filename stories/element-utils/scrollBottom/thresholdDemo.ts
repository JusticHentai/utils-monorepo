import { action } from 'storybook/actions'
import scrollBottom from '../../../packages/element-utils/src/scrollBottom'

let cleanup: (() => void) | null = null

export const initThresholdDemo = (element: HTMLElement) => {
  if (cleanup) {
    cleanup()
  }

  cleanup = scrollBottom(
    element,
    () => {
      action('滚动回调')('接近底部 50px')
    },
    { threshold: 50 }
  )

  action('添加滚动监听（带阈值）')('已添加滚动监听（阈值 50px）')
}

export const removeThresholdDemo = () => {
  if (cleanup) {
    cleanup()
    cleanup = null
    action('移除滚动监听')('已移除阈值滚动监听')
  } else {
    action('提示')('未添加监听')
  }
}
