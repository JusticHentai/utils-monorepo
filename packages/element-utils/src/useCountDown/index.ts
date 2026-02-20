import { useCallback, useEffect, useRef, useState } from 'react'

import { COUNT_DOWN_STATUS, UseCountDownOptions } from './interface'

/**
 * 倒计时 Hook
 */
const useCountDown = (options: UseCountDownOptions) => {
  const { initialSeconds } = options

  // 剩余秒数
  const [remainingSeconds, setRemainingSeconds] = useState(initialSeconds)
  // 当前计时状态
  const [countDownStatus, setCountDownStatus] = useState<COUNT_DOWN_STATUS>(
    COUNT_DOWN_STATUS.IDLE
  )

  // 使用 ref 存储状态，避免闭包问题
  const statusRef = useRef<COUNT_DOWN_STATUS>(COUNT_DOWN_STATUS.IDLE)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const lastTickTimeRef = useRef<number>(0)
  const remainingMsRef = useRef<number>(initialSeconds * 1000)

  /**
   * 清除定时器
   */
  const clearTimer = useCallback(() => {
    if (!timerRef.current) return

    clearInterval(timerRef.current)
    timerRef.current = null
  }, [])

  /**
   * 启动定时器
   */
  const startTimer = useCallback(() => {
    clearTimer()

    // 每次启动定时器，记录当前启动时间与过去时间的差值，兼容多种场景
    lastTickTimeRef.current = Date.now()

    timerRef.current = setInterval(() => {
      const now = Date.now()
      const elapsed = now - lastTickTimeRef.current
      lastTickTimeRef.current = now

      remainingMsRef.current = Math.max(0, remainingMsRef.current - elapsed)
      const newSeconds = Math.ceil(remainingMsRef.current / 1000)

      setRemainingSeconds(newSeconds)

      if (remainingMsRef.current > 0) return

      // 倒计时结束

      clearTimer()
      statusRef.current = COUNT_DOWN_STATUS.IDLE
      setCountDownStatus(COUNT_DOWN_STATUS.IDLE)
    }, 1000)
  }, [clearTimer])

  /**
   * 启动倒计时
   */
  const startCountdown = useCallback(() => {
    // 如果是 running 状态，不处理
    if (statusRef.current === COUNT_DOWN_STATUS.RUNNING) return

    // 如果是 idle 状态，重置剩余时间，再启动定时器
    if (statusRef.current === COUNT_DOWN_STATUS.IDLE) {
      remainingMsRef.current = initialSeconds * 1000
      setRemainingSeconds(initialSeconds)
    }

    // 暂停状态，直接启动定时器
    statusRef.current = COUNT_DOWN_STATUS.RUNNING
    setCountDownStatus(COUNT_DOWN_STATUS.RUNNING)
    startTimer()
  }, [initialSeconds, startTimer])

  /**
   * 暂停倒计时
   */
  const pauseCountdown = useCallback(() => {
    // 如果不是 running 状态，不处理
    if (statusRef.current !== COUNT_DOWN_STATUS.RUNNING) return

    statusRef.current = COUNT_DOWN_STATUS.PAUSED
    setCountDownStatus(COUNT_DOWN_STATUS.PAUSED)
    clearTimer()
  }, [clearTimer])

  /**
   * 结束倒计时
   */
  const endCountdown = useCallback(() => {
    clearTimer()
    statusRef.current = COUNT_DOWN_STATUS.IDLE
    setCountDownStatus(COUNT_DOWN_STATUS.IDLE)
  }, [clearTimer])

  /**
   * 恢复倒计时
   */
  const resumeCountdown = useCallback(() => {
    // 如果不是 paused 状态，不处理
    if (statusRef.current !== COUNT_DOWN_STATUS.PAUSED) return

    statusRef.current = COUNT_DOWN_STATUS.RUNNING
    setCountDownStatus(COUNT_DOWN_STATUS.RUNNING)
    startTimer()
  }, [startTimer])

  /**
   * 重新开始倒计时
   */
  const restartCountdown = useCallback(() => {
    clearTimer()

    remainingMsRef.current = initialSeconds * 1000
    setRemainingSeconds(initialSeconds)
    statusRef.current = COUNT_DOWN_STATUS.RUNNING
    setCountDownStatus(COUNT_DOWN_STATUS.RUNNING)
    startTimer()
  }, [clearTimer, initialSeconds, startTimer])

  // 组件卸载时清除定时器
  useEffect(() => {
    return () => {
      clearTimer()
    }
  }, [clearTimer])

  return {
    remainingSeconds,
    countDownStatus,
    startCountdown,
    pauseCountdown,
    resumeCountdown,
    restartCountdown,
    endCountdown,
  }
}

export default useCountDown
