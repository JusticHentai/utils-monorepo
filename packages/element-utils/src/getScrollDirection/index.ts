import type { GetScrollDirectionOptions, ScrollDirection } from './interface'

/**
 * 根据当前滚动位置和上一次滚动位置计算滚动方向
 *
 * @param options - 配置选项
 * @param options.x - 当前滚动位置 X
 * @param options.y - 当前滚动位置 Y
 * @param options.lastX - 上一次滚动位置 X
 * @param options.lastY - 上一次滚动位置 Y
 * @returns 滚动方向：'up' | 'down' | 'left' | 'right' | 'none'
 */
const getScrollDirection = ({
  x,
  y,
  lastX,
  lastY,
}: GetScrollDirectionOptions): ScrollDirection => {
  const deltaX = x - lastX
  const deltaY = y - lastY

  // 垂直方向变化更大时，返回垂直方向
  if (Math.abs(deltaY) > Math.abs(deltaX)) {
    if (deltaY > 0) return 'down'
    if (deltaY < 0) return 'up'
    return 'none'
  }

  // 水平方向变化更大时，返回水平方向
  if (deltaX > 0) return 'right'
  if (deltaX < 0) return 'left'
  return 'none'
}

export default getScrollDirection
