import { action } from 'storybook/actions'

/**
 * 模拟卡顿：通过同步阻塞主线程来触发卡顿检测
 */
const triggerJankDemo = () => {
  const statusEl = document.getElementById('status')

  if (statusEl) {
    statusEl.textContent = '正在模拟卡顿...'
    statusEl.style.background =
      'linear-gradient(135deg, #faad14 0%, #ffc53d 100%)'
  }

  action('模拟卡顿')('开始阻塞主线程 200ms')

  // 使用 setTimeout 确保 UI 更新后再阻塞
  setTimeout(() => {
    // 同步阻塞主线程 200ms
    const start = performance.now()
    while (performance.now() - start < 200) {
      // 空循环阻塞
    }

    action('模拟卡顿')('阻塞结束，如果正在监听会触发卡顿回调')
  }, 16)
}

export default triggerJankDemo
