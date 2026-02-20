import { action } from 'storybook/actions'

export const createStopDemo = (
  getStopFn: () => (() => void) | null,
  clearStopFn: () => void
) => {
  return () => {
    const stopFn = getStopFn()

    if (stopFn) {
      stopFn()
      clearStopFn()

      const statusEl = document.getElementById('status')
      if (statusEl) {
        statusEl.textContent = '已停止监听'
        statusEl.style.background =
          'linear-gradient(135deg, #8c8c8c 0%, #bfbfbf 100%)'
      }

      action('停止监听')('已清理 requestAnimationFrame')
    } else {
      action('停止监听')('当前未在监听状态')
    }
  }
}
