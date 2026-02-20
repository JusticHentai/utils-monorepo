import { action } from 'storybook/actions'
import visibility from '../../../packages/element-utils/src/visibility'

let removeListener: (() => void) | null = null

const initBasicDemo = () => {
  // 先移除旧的监听器，避免重复监听
  if (removeListener) {
    removeListener()
  }

  removeListener = visibility({
    visible: () => {
      action('可见性回调')('页面可见')
    },
    hidden: () => {
      action('可见性回调')('页面隐藏')
    },
  })

  action('添加可见性监听')('已添加可见性监听')
}

const removeBasicDemo = () => {
  if (removeListener) {
    removeListener()
    removeListener = null
    action('移除可见性监听')('已移除可见性监听')
  }
}

export { initBasicDemo, removeBasicDemo }
