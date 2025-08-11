import { defaultOptions, Options } from './interface'

import setResizeEvent from './utils/setResizeEvent'
import update from './utils/update'

/**
 * resize 适配, rem 模式
 * @param options
 */
const resize = (options?: Options) => {
  const innerOptions = { ...defaultOptions, ...options }

  // 初始化时执行一次
  update(innerOptions)

  // 设置 resize 事件
  setResizeEvent(innerOptions)
}

export default resize
