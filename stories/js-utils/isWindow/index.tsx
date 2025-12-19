import { action } from 'storybook/actions'
import '../../.css/index.css'
import notWindowDemo from './notWindowDemo'
import windowDemo from './windowDemo'

const isWindowDemo = () => {
  return (
    <div>
      <div
        className="storybook-button storybook-button-gap"
        onClick={() => {
          const res = windowDemo()

          action('检测 window 对象')(res)
        }}
      >
        检测 window 对象
      </div>
      <div
        className="storybook-button"
        onClick={() => {
          const res = notWindowDemo()

          action('检测普通对象 {}')(res)
        }}
      >
        检测普通对象 {}
      </div>
    </div>
  )
}

export default isWindowDemo
