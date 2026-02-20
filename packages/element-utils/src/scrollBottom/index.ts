import onScroll from '../onScroll'
import type {
  ScrollBottomCallback,
  ScrollBottomCleanup,
  ScrollBottomOptions,
} from './interface'

/**
 * 监听元素滚动到底部事件
 * @param element - 需要监听的DOM元素
 * @param cb - 滚动到底部时触发的回调函数
 * @param options - 配置选项
 * @returns 移除事件监听的清理函数
 */
const scrollBottom = (
  element: HTMLElement,
  cb: ScrollBottomCallback,
  options?: ScrollBottomOptions
): ScrollBottomCleanup => {
  const { threshold = 0, throttle = 0 } = options || {}

  return onScroll(
    element,
    () => {
      // 计算是否达到底部：当前滚动位置 >= (元素总高度 - 可视区域高度 - 阈值)
      if (
        element.scrollTop >=
        element.scrollHeight - element.clientHeight - threshold
      ) {
        cb()
      }
    },
    { throttle }
  )
}

export default scrollBottom
