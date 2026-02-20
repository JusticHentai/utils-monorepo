import { action } from 'storybook/actions'

/**
 * 停止监听页面卸载
 */
const cleanupDemo = (stop: (() => void) | null) => {
  if (stop) {
    stop()
    action('停止监听')('已停止页面卸载监听')
  } else {
    action('提示')('当前没有正在进行的监听')
  }
}

export default cleanupDemo
