import { action } from 'storybook/actions'
import createEventListener from '../../../packages/element-utils/src/createEventListener'

const basicDemo = () => {
  // 监听窗口 resize 事件
  const stopResize = createEventListener(window, 'resize', (e) => {
    action('窗口尺寸变化')({
      width: window.innerWidth,
      height: window.innerHeight,
    })
  })

  action('监听已启动')('调整浏览器窗口大小查看效果，5秒后自动停止')

  // 5秒后停止监听
  setTimeout(() => {
    stopResize()
    action('监听已停止')('resize 事件监听已移除')
  }, 5000)
}

export default basicDemo
