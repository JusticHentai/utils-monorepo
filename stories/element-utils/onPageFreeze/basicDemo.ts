import { action } from 'storybook/actions'
import onPageFreeze from '../../../packages/element-utils/src/onPageFreeze'

const basicDemo = () => {
  const stop = onPageFreeze((e) => {
    action('页面冻结')({
      type: e.type,
      timestamp: Date.now(),
    })
  })

  action('onPageFreeze')('已注册 freeze 监听（切换标签页或最小化窗口可能触发）')

  setTimeout(() => {
    stop()
    action('清理完成')('已移除 freeze 监听')
  }, 10000)
}

export default basicDemo
