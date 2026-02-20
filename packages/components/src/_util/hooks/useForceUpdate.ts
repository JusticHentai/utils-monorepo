import { useCallback, useReducer } from 'react'

export default function useForceUpdate() {
  const [, dispatch] = useReducer((v: number) => v + 1, 0)
  return useCallback(() => dispatch(), [])
}
