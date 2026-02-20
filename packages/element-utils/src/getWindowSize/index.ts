import type { WindowSize } from './interface'

/**
 * 获取当前窗口尺寸
 *
 * @returns 窗口尺寸对象，包含 width 和 height
 */
const getWindowSize = (): WindowSize => ({
  width: window.innerWidth,
  height: window.innerHeight,
})

export default getWindowSize
