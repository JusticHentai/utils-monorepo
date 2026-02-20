import { defaultOptions, ResizeOptions } from './interface'

import setResizeEvent from './utils/setResizeEvent'
import update from './utils/update'

/**
 * resize 适配, rem 模式
 * @param options
 * @returns cleanup 清理函数, 用于移除事件监听
 */
const resize = (options?: ResizeOptions): (() => void) => {
  const innerOptions = { ...defaultOptions, ...options }

  // 初始化时执行一次
  update(innerOptions)

  // 设置 resize 事件, 返回清理函数
  const cleanup = setResizeEvent(innerOptions)

  return cleanup
}

export default resize
