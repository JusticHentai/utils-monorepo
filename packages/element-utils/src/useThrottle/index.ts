import { useRef } from 'react'

interface Options {
  cb: <T extends any[]>(...args: T) => any
  duration: number
}

/**
 * react 中节流 hook
 * 主要保证 timer 维护在 fiber 里就行
 */
const useThrottle = (options: Options) => {
  const { cb, duration } = options

  const timer = useRef<NodeJS.Timeout | null>(null)

  const throttleHandler = <T extends any[]>(...args: T) => {
    if (timer.current) {
      timer.current && clearTimeout(timer.current)
      timer.current = null

      return
    }

    timer.current = setTimeout(() => {
      timer.current && clearTimeout(timer.current)
      timer.current = null
    }, duration)

    cb(...args)
  }

  return throttleHandler
}

export default useThrottle
