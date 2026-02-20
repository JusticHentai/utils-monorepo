import { useEffect, useRef } from 'react'

export default function usePrevious<T>(value: T): T | undefined {
  const ref = useRef<T>(undefined)
  useEffect(() => {
    ref.current = value
  })
  // eslint-disable-next-line react-hooks/refs
  return ref.current
}
