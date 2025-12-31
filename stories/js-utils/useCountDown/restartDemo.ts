import useCountDown from '../../../packages/js-utils/src/useCountDown'

/**
 * 重新开始倒计时示例
 * 该示例展示如何使用 restartCountdown 重新开始倒计时
 */
const RestartDemo = () => {
  const { remainingSeconds, restartCountdown } = useCountDown(10)

  return {
    remainingSeconds,
    restartCountdown,
  }
}

export default RestartDemo
