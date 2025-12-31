import { action } from 'storybook/actions'
import '../../.css/index.css'
import useThrottle from '../../../packages/element-utils/src/useThrottle'

const UseThrottleDemo = () => {
  const throttledClick = useThrottle({
    cb: () => {
      action('节流回调执行')(new Date().toISOString())
    },
    duration: 1000,
  })

  return (
    <div>
      <div
        className="storybook-button storybook-button-gap"
        onClick={throttledClick}
      >
        节流点击（1秒内只触发一次）
      </div>
    </div>
  )
}

export default UseThrottleDemo
