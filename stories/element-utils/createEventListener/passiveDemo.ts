import { action } from 'storybook/actions'
import createEventListener from '../../../packages/element-utils/src/createEventListener'

const passiveDemo = () => {
  // 使用 passive 选项优化滚动性能
  const stopScroll = createEventListener(
    document,
    'scroll',
    () => {
      action('滚动事件（passive）')({
        scrollY: window.scrollY,
        scrollX: window.scrollX,
      })
    },
    { passive: true }
  )

  action('passive 滚动监听已启动')('滚动页面查看效果，5秒后自动停止')

  setTimeout(() => {
    stopScroll()
    action('监听已停止')('scroll 事件监听已移除')
  }, 5000)
}

export default passiveDemo
