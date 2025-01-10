import { DefaultOptions, InnerOptions, Options } from './types'
import setResizeEvent from './utils/setResizeEvent'
import update from './utils/update'

const defaults: DefaultOptions = {
  resizePreset: {
    horizontal: {
      width: 1920,
      height: 1080,
    },
    vertical: {
      width: 750,
      height: 750,
    },
  },
  resizeType: 'all',
}

export default function resize(options: Options = {}) {
  const innerOptions: InnerOptions = { ...defaults, ...options }

  // 初始化时执行一次
  update(innerOptions)

  // 设置 resize 事件
  setResizeEvent(innerOptions)
}
