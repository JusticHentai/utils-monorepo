import { action } from 'storybook/actions'

/**
 * 触发长任务演示
 * 通过阻塞主线程来模拟长任务
 */
const triggerLongTaskDemo = () => {
  action('触发长任务')('开始执行 100ms 的阻塞任务...')

  const startTime = performance.now()

  // 阻塞主线程 100ms（超过 50ms 阈值会被检测为长任务）
  while (performance.now() - startTime < 100) {
    // 空循环阻塞主线程
  }

  const endTime = performance.now()
  const duration = endTime - startTime

  action('长任务完成')({
    actualDuration: `${duration.toFixed(2)}ms`,
    message: '如果监听已启动，应该会在 Actions 面板看到检测到的长任务',
  })
}

export default triggerLongTaskDemo
