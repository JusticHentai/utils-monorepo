import useCountDown from '../../../packages/js-utils/src/useCountDown'

/**
 * 启动倒计时示例
 * 该示例展示如何使用 startCountdown 启动倒计时
 */
const StartDemo = () => {
  const { remainingSeconds, startCountdown } = useCountDown(10)

  return {
    remainingSeconds,
    startCountdown,
  }
}

export default StartDemo
