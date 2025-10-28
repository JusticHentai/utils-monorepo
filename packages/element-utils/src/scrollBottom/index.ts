/**
 * 监听元素滚动到底部事件
 * @param element - 需要监听的DOM元素
 * @param cb - 滚动到底部时触发的回调函数
 * @param threshold - 滚动到底部的阈值（像素），默认0表示严格底部
 * @returns 移除事件监听的清理函数
 */
const scrollBottom = (
  element: HTMLElement,
  cb: (...params: any[]) => any,
  threshold: number = 0
): (() => void) => {
  const handleScroll = () => {
    // 计算是否达到底部：当前滚动位置 >= (元素总高度 - 可视区域高度 - 阈值)
    if (
      element.scrollTop >=
      element.scrollHeight - element.clientHeight - threshold
    ) {
      cb()
    }
  }

  // 注册滚动事件监听
  element.addEventListener('scroll', handleScroll)

  // 返回清理函数用于移除监听，防止内存泄漏
  return () => element.removeEventListener('scroll', handleScroll)
}

export default scrollBottom
