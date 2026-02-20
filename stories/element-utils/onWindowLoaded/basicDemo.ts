import { action } from 'storybook/actions'
import onWindowLoaded from '../../../packages/element-utils/src/onWindowLoaded'

const basicDemo = () => {
  const stop = onWindowLoaded((e) => {
    action('窗口加载完成')({
      type: e.type,
      readyState: document.readyState,
      timestamp: Date.now(),
    })
  })

  action('onWindowLoaded')('已注册 load 监听（若已加载完成则延迟一个微任务后执行）')

  setTimeout(() => {
    stop()
    action('清理完成')('已移除 load 监听')
  }, 5000)
}

export default basicDemo
