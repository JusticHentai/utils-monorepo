import { action } from 'storybook/actions'
import visibility from '../../../packages/element-utils/src/visibility'

const onceDemo = () => {
  // once: true - 只触发一次，触发后自动移除监听
  // safariCompat: true - 兼容 Safari 的 pagehide 事件
  visibility({
    hidden: () => {
      action('一次性回调')('页面隐藏 - 只触发一次')
    },
    once: true,
    safariCompat: true,
  })

  action('添加一次性监听')('已添加，切换标签页后自动移除')
}

export default onceDemo
