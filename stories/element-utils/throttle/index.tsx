import { action } from 'storybook/actions'
import '../../.css/index.css'
import basicDemo from './basicDemo'
import immediateDemo from './immediateDemo'

const ThrottleDemo = () => {
  return (
    <div>
      <div
        className="storybook-button storybook-button-gap"
        onClick={() => {
          const res = basicDemo()
          action('节流函数（延迟执行）')(res)
        }}
      >
        节流函数（延迟执行）
      </div>
      <div
        className="storybook-button storybook-button-gap"
        onClick={() => {
          const res = immediateDemo()
          action('节流函数（立即执行）')(res)
        }}
      >
        节流函数（立即执行）
      </div>
    </div>
  )
}

export default ThrottleDemo
