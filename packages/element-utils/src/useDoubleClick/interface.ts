import { MouseEvent } from 'react'

/**
 * useDoubleClick Hook 配置项
 */
export interface UseDoubleClickOptions<T extends Element = Element> {
  /** 单击回调 */
  onClick?: (event: MouseEvent<T>) => void
  /** 双击回调 */
  onDoubleClick?: (event: MouseEvent<T>) => void
  /** 判定双击的时间间隔（毫秒） */
  delay?: number
}

/**
 * useDoubleClick Hook 返回值
 */
export interface UseDoubleClickReturn<T extends Element = Element> {
  /** 绑定到元素的点击处理函数 */
  handleClick: (event: MouseEvent<T>) => void
}
