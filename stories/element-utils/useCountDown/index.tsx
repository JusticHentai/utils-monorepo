import { action } from 'storybook/actions'
import '../../.css/index.css'
import useCountDown from '../../../packages/element-utils/src/useCountDown'

const UseCountDownDemo = () => {
  const {
    remainingSeconds,
    countDownStatus,
    startCountdown,
    pauseCountdown,
    resumeCountdown,
    restartCountdown,
    endCountdown,
  } = useCountDown({ initialSeconds: 10 })

  const statusText = ['空闲', '运行中', '已暂停'][countDownStatus]

  return (
    <div>
      <div style={{ marginBottom: 20, textAlign: 'center' }}>
        <div style={{ fontSize: 24, fontWeight: 'bold' }}>
          {remainingSeconds} 秒
        </div>
        <div>状态: {statusText}</div>
      </div>
      <div
        className="storybook-button storybook-button-gap"
        onClick={() => {
          startCountdown()
          action('开始倒计时')('已开始')
        }}
      >
        开始
      </div>
      <div
        className="storybook-button storybook-button-gap"
        onClick={() => {
          pauseCountdown()
          action('暂停倒计时')('已暂停')
        }}
      >
        暂停
      </div>
      <div
        className="storybook-button storybook-button-gap"
        onClick={() => {
          resumeCountdown()
          action('恢复倒计时')('已恢复')
        }}
      >
        恢复
      </div>
      <div
        className="storybook-button storybook-button-gap"
        onClick={() => {
          restartCountdown()
          action('重新开始')('已重新开始')
        }}
      >
        重新开始
      </div>
      <div
        className="storybook-button storybook-button-gap"
        onClick={() => {
          endCountdown()
          action('结束倒计时')('已结束')
        }}
      >
        结束
      </div>
    </div>
  )
}

export default UseCountDownDemo
