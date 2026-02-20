import { useCallback, useRef } from 'react'
import KeyCode from '../keycode'

type CallbackMap = Partial<Record<string, (e: KeyboardEvent) => void>>

export default function useKeyboardEvent() {
  const callbackRef = useRef<CallbackMap>({})

  const getEventListeners = useCallback((callbacks: CallbackMap) => {
    callbackRef.current = callbacks
    return {
      onKeyDown: (e: React.KeyboardEvent) => {
        const callback = callbackRef.current[e.key]
        callback?.(e as unknown as KeyboardEvent)
      },
    }
  }, [])

  return getEventListeners
}

export { KeyCode }
