import { action } from 'storybook/actions'

export const createCleanupDemo = (
  getCleanup: () => (() => void) | null,
  clearCleanup: () => void,
) => {
  return () => {
    const cleanup = getCleanup()

    if (cleanup) {
      cleanup()
      clearCleanup()

      const info = document.getElementById('resize-info')
      if (info) info.textContent = '已销毁 resize 监听'

      action('销毁成功')('已移除 resize 和 orientationchange 事件监听')
    } else {
      action('销毁失败')('当前没有活跃的 resize 监听')
    }
  }
}
