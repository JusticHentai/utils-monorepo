import { action } from 'storybook/actions'
import scrollBottom from '../../../packages/element-utils/src/scrollBottom'

let cleanup: (() => void) | null = null

export const initBasicDemo = (element: HTMLElement) => {
  if (cleanup) {
    cleanup()
  }

  cleanup = scrollBottom(element, () => {
    action('滚动回调')('滚动到底部')
  })

  action('添加滚动监听')('已添加基础滚动监听')
}

export const removeBasicDemo = () => {
  if (cleanup) {
    cleanup()
    cleanup = null
    action('移除滚动监听')('已移除基础滚动监听')
  } else {
    action('提示')('未添加监听')
  }
}
