import { action } from 'storybook/actions'

/**
 * 模拟慢速交互处理
 * 通过阻塞主线程来产生可观察的 INP 延迟
 */
export const triggerSlowInteraction = () => {
  // 阻塞主线程一段时间来模拟慢速处理
  const start = performance.now()
  while (performance.now() - start < 100) {
    // 阻塞 100ms
  }
  action('交互完成')('慢速交互处理完成，INP 应该记录到此次延迟')
}

/**
 * 模拟快速交互处理
 */
export const triggerFastInteraction = () => {
  action('交互完成')('快速交互处理完成')
}
