import { useCallback, useEffect, useRef, useState } from 'react'

/**
 * 倒计时状态
 */
type CountDownStatus = 'idle' | 'running' | 'paused'

/**
 * useCountDown 返回值类型
 */
export interface UseCountDownReturn {
  /** 当前剩余秒数 */
  remainingSeconds: number
  /** 启动倒计时 */
  startCountdown: () => void
  /** 暂停倒计时 */
  pauseCountdown: () => void
  /** 恢复倒计时 */
  resumeCountdown: () => void
  /** 重新开始倒计时 */
  restartCountdown: () => void
}

/**
 * 倒计时 Hook
 * @param initialSeconds 初始倒计时秒数
 * @returns 返回剩余秒数和控制函数
 *
 * @example
 * ```tsx
 * const {
 *   remainingSeconds,
 *   startCountdown,
 *   pauseCountdown,
 *   resumeCountdown,
 *   restartCountdown
 * } = useCountDown(60)
 *
 * return (
 *   <div>
 *     <p>剩余时间: {remainingSeconds}秒</p>
 *     <button onClick={startCountdown}>开始</button>
 *     <button onClick={pauseCountdown}>暂停</button>
 *     <button onClick={resumeCountdown}>继续</button>
 *     <button onClick={restartCountdown}>重新开始</button>
 *   </div>
 * )
 * ```
 */
const useCountDown = (initialSeconds: number): UseCountDownReturn => {
  // 剩余秒数
  const [remainingSeconds, setRemainingSeconds] = useState(initialSeconds)

  // 使用 ref 存储状态，避免闭包问题
  const statusRef = useRef<CountDownStatus>('idle')
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const lastTickTimeRef = useRef<number>(0)
  const remainingMsRef = useRef<number>(initialSeconds * 1000)

  /**
   * 清除定时器
   */
  const clearTimer = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current)
      timerRef.current = null
    }
  }, [])

  /**
   * 启动定时器
   */
  const startTimer = useCallback(() => {
    clearTimer()
    lastTickTimeRef.current = Date.now()

    timerRef.current = setInterval(() => {
      const now = Date.now()
      const elapsed = now - lastTickTimeRef.current
      lastTickTimeRef.current = now

      remainingMsRef.current = Math.max(0, remainingMsRef.current - elapsed)
      const newSeconds = Math.ceil(remainingMsRef.current / 1000)

      setRemainingSeconds(newSeconds)

      // 倒计时结束
      if (remainingMsRef.current <= 0) {
        clearTimer()
        statusRef.current = 'idle'
      }
    }, 100) // 使用 100ms 间隔提高精度
  }, [clearTimer])

  /**
   * 启动倒计时
   */
  const startCountdown = useCallback(() => {
    if (statusRef.current === 'running') return

    // 如果是 idle 状态，重置剩余时间
    if (statusRef.current === 'idle') {
      remainingMsRef.current = initialSeconds * 1000
      setRemainingSeconds(initialSeconds)
    }

    statusRef.current = 'running'
    startTimer()
  }, [initialSeconds, startTimer])

  /**
   * 暂停倒计时
   */
  const pauseCountdown = useCallback(() => {
    if (statusRef.current !== 'running') return

    statusRef.current = 'paused'
    clearTimer()
  }, [clearTimer])

  /**
   * 恢复倒计时
   */
  const resumeCountdown = useCallback(() => {
    if (statusRef.current !== 'paused') return

    statusRef.current = 'running'
    startTimer()
  }, [startTimer])

  /**
   * 重新开始倒计时
   */
  const restartCountdown = useCallback(() => {
    clearTimer()
    remainingMsRef.current = initialSeconds * 1000
    setRemainingSeconds(initialSeconds)
    statusRef.current = 'running'
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
    startCountdown,
    pauseCountdown,
    resumeCountdown,
    restartCountdown,
  }
}

export default useCountDown
