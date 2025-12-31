import { action } from 'storybook/actions'
import '../../.css/index.css'
import basicDemo from './basicDemo'

const ThrottleByRafDemo = () => {
  return (
    <div>
      <div
        className="storybook-button storybook-button-gap"
        onClick={() => {
          const res = basicDemo()
          action('RAF 节流函数')(res.message)
        }}
      >
        RAF 节流函数
      </div>
    </div>
  )
}

export default ThrottleByRafDemo
