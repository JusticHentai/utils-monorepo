import '../../.css/index.css'
import useCountDown from '../../../packages/js-utils/src/useCountDown'

const UseCountDownDemo = () => {
  const {
    remainingSeconds,
    startCountdown,
    pauseCountdown,
    resumeCountdown,
    restartCountdown,
  } = useCountDown(10)

  return (
    <div>
      <div style={{ marginBottom: 20, fontSize: 24, fontWeight: 'bold' }}>
        剩余时间: {remainingSeconds} 秒
      </div>
      <div
        className="storybook-button storybook-button-gap"
        onClick={startCountdown}
      >
        开始倒计时
      </div>
      <div
        className="storybook-button storybook-button-gap"
        onClick={pauseCountdown}
      >
        暂停倒计时
      </div>
      <div
        className="storybook-button storybook-button-gap"
        onClick={resumeCountdown}
      >
        恢复倒计时
      </div>
      <div className="storybook-button" onClick={restartCountdown}>
        重新开始
      </div>
    </div>
  )
}

export default UseCountDownDemo
