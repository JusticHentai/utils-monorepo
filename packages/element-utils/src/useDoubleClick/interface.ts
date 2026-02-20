import { MouseEvent, TouchEvent } from 'react'

/** 点击事件类型 */
export type ClickEvent<T extends Element = Element> =
  | MouseEvent<T>
  | TouchEvent<T>

/**
 * useDoubleClick Hook 配置项
 */
export interface UseDoubleClickOptions<T extends Element = Element> {
  /** 连击回调，每次点击都会立即触发，参数为当前连击次数 */
  onCombo?: (count: number, event: ClickEvent<T>) => void
  /** 连击结束回调，delay 内无新点击时触发，参数为最终连击次数 */
  onComboEnd?: (count: number) => void
  /** 判定连击的时间间隔（毫秒），默认 300 */
  delay?: number
}

/**
 * useDoubleClick Hook 返回值
 */
export interface UseDoubleClickReturn<T extends Element = Element> {
  /** 绑定到元素的点击处理函数 */
  handleClick: (event: MouseEvent<T>) => void
  /** 绑定到元素的触摸处理函数 */
  handleTouch: (event: TouchEvent<T>) => void
}
