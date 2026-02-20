import '../../.css/index.css'
import { useState } from 'react'
import { action } from 'storybook/actions'
import useCountDown from '../../../packages/element-utils/src/useCountDown'

const UseCountDownDemo = () => {
  const [initialSeconds] = useState(10)

  const {
    remainingSeconds,
    countDownStatus,
    startCountdown,
    pauseCountdown,
    resumeCountdown,
    restartCountdown,
    endCountdown,
  } = useCountDown({ initialSeconds })

  const statusText = ['空闲', '运行中', '已暂停'][countDownStatus]

  const handleStart = () => {
    startCountdown()
    action('开始倒计时')('状态: 运行中')
  }

  const handlePause = () => {
    pauseCountdown()
    action('暂停倒计时')('状态: 已暂停')
  }

  const handleResume = () => {
    resumeCountdown()
    action('恢复倒计时')('状态: 运行中')
  }

  const handleRestart = () => {
    restartCountdown()
    action('重新开始')(`重置为 ${initialSeconds} 秒`)
  }

  const handleEnd = () => {
    endCountdown()
    action('结束倒计时')('状态: 空闲')
  }

  return (
    <div>
      <div className="button" onClick={handleStart}>
        开始倒计时
      </div>
      <div className="button" onClick={handlePause}>
        暂停
      </div>
      <div className="button" onClick={handleResume}>
        恢复
      </div>
      <div className="button" onClick={handleRestart}>
        重新开始
      </div>
      <div className="button" onClick={handleEnd}>
        结束
      </div>

      {/* 演示区域 - 放在按钮下方 */}
      <div style={{ marginTop: 40, textAlign: 'center' }}>
        <div
          style={{
            width: 200,
            height: 120,
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            borderRadius: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
          }}
        >
          <div style={{ fontSize: 36, fontWeight: 'bold' }}>
            {remainingSeconds}
          </div>
          <div style={{ fontSize: 14, marginTop: 8 }}>秒</div>
          <div
            style={{
              fontSize: 12,
              marginTop: 8,
              padding: '2px 8px',
              background: 'rgba(255,255,255,0.2)',
              borderRadius: 4,
            }}
          >
            {statusText}
          </div>
        </div>
      </div>
    </div>
  )
}

export default UseCountDownDemo
