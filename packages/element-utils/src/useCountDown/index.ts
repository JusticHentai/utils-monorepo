import { useCallback, useEffect, useRef, useState } from 'react'

interface Options {
  cb?: () => any
  duration: number
}

export enum COUNT_DOWN_STATUS {
  STOP,
  RUNNING,
}

const useCountDown = (options: Options) => {
  const { cb, duration } = options

  const refState = useRef<
    Options & { timer: NodeJS.Timeout | null; countDown: number }
  >({
    cb,
    duration,
    timer: null,
    countDown: duration,
  })

  useEffect(() => {
    refState.current.duration = duration
    refState.current.cb = cb
  }, [cb, duration])

  // ----

  const [countDown, setCountDown] = useState(duration)
  const [countDownStatus, setCountDownStatus] = useState(COUNT_DOWN_STATUS.STOP)

  // ----
  const stop = useCallback(() => {
    const { timer } = refState.current
    timer && clearInterval(timer)
    setCountDownStatus(COUNT_DOWN_STATUS.STOP)
  }, [])

  const start = useCallback(() => {
    const { cb, duration, timer } = refState.current

    timer && clearInterval(timer)
    setCountDown(duration)
    refState.current.countDown = duration
    setCountDownStatus(COUNT_DOWN_STATUS.RUNNING)

    refState.current.timer = setInterval(async () => {
      refState.current.countDown--

      if (refState.current.countDown <= 0) {
        stop()
        const canNext = await cb?.()

        canNext && start()

        return
      }

      setCountDown(refState.current.countDown)
    }, 1000)
  }, [stop])

  const resume = useCallback(() => {
    const { cb, timer, countDown } = refState.current

    timer && clearInterval(timer)
    setCountDown(countDown)
    setCountDownStatus(COUNT_DOWN_STATUS.RUNNING)

    refState.current.timer = setInterval(async () => {
      if (refState.current.countDown <= 0) {
        stop()
        const canNext = await cb?.()

        canNext && start()

        return
      }

      setCountDown(refState.current.countDown - 1)
    }, 1000)
  }, [stop, start])

  return {
    countDown,
    countDownStatus,
    start,
    stop,
    resume,
  }
}

export default useCountDown
