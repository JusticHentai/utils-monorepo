import { useRef } from 'react'

interface Props {
  /**
   * 点击持续时间
   */
  duration: number
  /**
   * 回调函数
   */
  cb: (count: number) => any
}

/**
 * 首次点击开始计时
 * duration 时间内点击多少次，最后在 cb 中返回点击次数
 */
const useTap = ({ duration, cb }: Props) => {
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  // 点击次数
  const countRef = useRef<number>(0)

  const handleTap = () => {
    // 计时器不存在，说明 tapDuration 时间内首次点击
    if (!timerRef.current) {
      timerRef.current = setTimeout(() => {
        cb?.(countRef.current)
        timerRef.current = null
        countRef.current = 0
      }, duration)
    }

    // 每次点击都给 countRef 加 1
    countRef.current++
  }

  return handleTap
}

export default useTap