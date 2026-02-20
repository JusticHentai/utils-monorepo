import { useEffect } from 'react'

import createEventListener from '../createEventListener'
import { getTargetElement } from '../domTarget'
import useLatest from '../useLatest'
import type { UseEventListenerOptions } from './interface'

export type { UseEventListenerOptions } from './interface'

function useEventListener<K extends keyof HTMLElementEventMap>(
  eventName: K,
  handler: (ev: HTMLElementEventMap[K]) => void,
  options?: UseEventListenerOptions
): void
function useEventListener<K extends keyof WindowEventMap>(
  eventName: K,
  handler: (ev: WindowEventMap[K]) => void,
  options?: UseEventListenerOptions
): void
function useEventListener<K extends keyof DocumentEventMap>(
  eventName: K,
  handler: (ev: DocumentEventMap[K]) => void,
  options?: UseEventListenerOptions
): void
function useEventListener(
  eventName: string,
  handler: (ev: Event) => void,
  options?: UseEventListenerOptions
): void

/**
 * 优雅地使用 addEventListener
 *
 * @param eventName - 事件名称
 * @param handler - 事件处理函数
 * @param options - 配置项
 */
function useEventListener(
  eventName: string,
  handler: (ev: Event) => void,
  options: UseEventListenerOptions = {}
) {
  const handlerRef = useLatest(handler)

  useEffect(() => {
    const {
      target = window,
      capture = false,
      once = false,
      passive = false,
    } = options
    const targetElement = getTargetElement(target, window)

    if (!targetElement?.addEventListener) {
      return
    }

    return createEventListener(
      targetElement,
      eventName,
      (event: Event) => handlerRef.current(event),
      { capture, once, passive }
    )
  }, [
    eventName,
    options.target,
    options.capture,
    options.once,
    options.passive,
  ])
}

export default useEventListener
