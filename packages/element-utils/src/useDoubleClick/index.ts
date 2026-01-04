import { MouseEvent, useCallback, useRef } from 'react'

import { UseDoubleClickOptions, UseDoubleClickReturn } from './interface'

/**
 * 双击事件处理 Hook
 * 区分单击和双击事件，防止单击干扰双击
 */
const useDoubleClick = <T extends Element = Element>(
  options: UseDoubleClickOptions<T>
): UseDoubleClickReturn<T> => {
  const { onClick, onDoubleClick, delay = 300 } = options

  if (delay < 0) {
    throw new Error('delay must be a non-negative number')
  }

  // 点击计数
  const clickCountRef = useRef<number>(0)
  // 定时器引用
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  // 存储最后一次点击事件
  const lastEventRef = useRef<MouseEvent<T> | null>(null)

  /**
   * 清除定时器
   */
  const clearTimer = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current)
      timerRef.current = null
    }
  }, [])

  /**
   * 处理点击事件
   */
  const handleClick = useCallback(
    (event: MouseEvent<T>) => {
      // 阻止事件冒泡，防止触发原生的双击事件
      event.preventDefault()

      // 保存当前事件
      lastEventRef.current = event

      // 增加点击计数
      clickCountRef.current += 1

      // 如果是第一次点击，启动定时器
      if (clickCountRef.current === 1) {
        timerRef.current = setTimeout(() => {
          // 定时器触发时，如果只有一次点击，则为单击
          if (clickCountRef.current === 1) {
            onClick?.(lastEventRef.current!)
          }
          // 重置计数
          clickCountRef.current = 0
          lastEventRef.current = null
        }, delay)
      }

      // 如果是第二次点击（双击）
      if (clickCountRef.current === 2) {
        clearTimer()
        clickCountRef.current = 0
        onDoubleClick?.(event)
        lastEventRef.current = null
      }
    },
    [onClick, onDoubleClick, delay, clearTimer]
  )

  return {
    handleClick,
  }
}

export default useDoubleClick
