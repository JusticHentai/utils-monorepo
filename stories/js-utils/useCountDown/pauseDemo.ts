import useCountDown from '../../../packages/js-utils/src/useCountDown'

/**
 * 暂停倒计时示例
 * 该示例展示如何使用 pauseCountdown 暂停倒计时
 */
const PauseDemo = () => {
  const { remainingSeconds, startCountdown, pauseCountdown } = useCountDown(10)

  return {
    remainingSeconds,
    startCountdown,
    pauseCountdown,
  }
}

export default PauseDemo
