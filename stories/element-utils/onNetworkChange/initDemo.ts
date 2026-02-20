import { action } from 'storybook/actions'
import onNetworkChange from '../../../packages/element-utils/src/onNetworkChange'

const initDemo = () => {
  const stop = onNetworkChange((online) => {
    action('网络状态变化')(online ? '在线' : '离线')
  })

  action('开始监听')('当前状态: ' + (navigator.onLine ? '在线' : '离线'))

  // 返回清理函数供后续调用
  return stop
}

export default initDemo
