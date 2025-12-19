import { useRef } from 'react'
import '../../.css/index.css'
import clearCountdownDemo from './clearCountdownDemo'
import startCountDownDemo from './startCountDownDemo'

const CountdownDemo = () => {
  const clearRef = useRef<() => void>(null)

  return (
    <div>
      <div
        className="storybook-button"
        onClick={() => {
          clearRef.current = startCountDownDemo()
        }}
      >
        开始倒计时 5 秒
      </div>
      <div
        className="storybook-button"
        onClick={() => {
          clearCountdownDemo(clearRef.current)
        }}
      >
        清除倒计时
      </div>
    </div>
  )
}

export default CountdownDemo
