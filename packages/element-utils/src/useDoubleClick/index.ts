import { MouseEvent, TouchEvent, useCallback, useEffect, useRef } from 'react'

import combo from '../combo'
import useLatest from '../useLatest'

import type {
  ClickEvent,
  UseDoubleClickOptions,
  UseDoubleClickReturn,
} from './interface'

/**
 * 连续点击处理 Hook
 * 基于 combo 实现连击计数，区分单击、双击及多次连击
 * 支持鼠标点击和触摸事件
 */
const useDoubleClick = <T extends Element = Element>(
  options: UseDoubleClickOptions<T>
): UseDoubleClickReturn<T> => {
  const { delay = 300 } = options
  const optionsRef = useLatest(options)
  const lastEventRef = useRef<ClickEvent<T> | null>(null)
  const comboCountRef = useRef(0)
  const comboFnRef = useRef<(() => void) | null>(null)

  useEffect(() => {
    comboFnRef.current = combo({
      duration: delay,
      onCombo: (count) => {
        comboCountRef.current = count ?? 0
        const event = lastEventRef.current
        if (!event) return

        optionsRef.current.onCombo?.(comboCountRef.current, event)
      },
      onClose: () => {
        const count = comboCountRef.current
        optionsRef.current.onComboEnd?.(count)
        comboCountRef.current = 0
        lastEventRef.current = null
      },
    })
  }, [delay, optionsRef])

  const processClick = useCallback((event: ClickEvent<T>) => {
    lastEventRef.current = event
    comboFnRef.current?.()
  }, [])

  const handleClick = useCallback(
    (event: MouseEvent<T>) => {
      event.preventDefault()
      processClick(event)
    },
    [processClick]
  )

  const handleTouch = useCallback(
    (event: TouchEvent<T>) => {
      event.preventDefault()
      processClick(event)
    },
    [processClick]
  )

  return {
    handleClick,
    handleTouch,
  }
}

export default useDoubleClick
