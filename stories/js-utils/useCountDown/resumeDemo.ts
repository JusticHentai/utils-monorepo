import useCountDown from '../../../packages/js-utils/src/useCountDown'

/**
 * 恢复倒计时示例
 * 该示例展示如何使用 resumeCountdown 恢复暂停的倒计时
 */
const ResumeDemo = () => {
  const { remainingSeconds, startCountdown, pauseCountdown, resumeCountdown } =
    useCountDown(10)

  return {
    remainingSeconds,
    startCountdown,
    pauseCountdown,
    resumeCountdown,
  }
}

export default ResumeDemo
