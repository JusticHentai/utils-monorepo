import { useRef } from 'react'

export default function useIsFirstRender() {
  const isFirstRenderRef = useRef(true)
  // eslint-disable-next-line react-hooks/refs
  if (isFirstRenderRef.current) {
    // eslint-disable-next-line react-hooks/refs
    isFirstRenderRef.current = false
    return true
  }
  return false
}
