import { action } from 'storybook/actions'

const cleanupDemo = (stop: (() => void) | null) => {
  if (stop) {
    stop()
    action('停止监听')('已停止所有错误监控')
  } else {
    action('提示')('当前没有正在进行的监听')
  }
}

export default cleanupDemo
