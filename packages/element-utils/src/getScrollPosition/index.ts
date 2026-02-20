import isWindow from '@justichentai/js-utils/isWindow'
import type { ScrollPosition, ScrollTarget } from './interface'

/**
 * 获取目标元素的滚动位置
 *
 * @param target - 滚动目标，Window 或 Element
 * @returns 滚动位置对象，包含 x（水平）和 y（垂直）坐标
 */
const getScrollPosition = (target: ScrollTarget): ScrollPosition => {
  return isWindow(target)
    ? {
        x: target.scrollX || target.pageXOffset,
        y: target.scrollY || target.pageYOffset,
      }
    : {
        x: target.scrollLeft,
        y: target.scrollTop,
      }
}

export default getScrollPosition
