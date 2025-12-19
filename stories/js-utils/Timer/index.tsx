import { action } from 'storybook/actions'
import '../../.css/index.css'
import setDemo from './setDemo'
import startDemo from './startDemo'

const TimerDemo = () => {
  return (
    <div>
      <div
        className="storybook-button storybook-button-gap"
        onClick={() => {
          const res = startDemo()

          action('开始计时')(res)
        }}
      >
        开始计时
      </div>
      <div
        className="storybook-button"
        onClick={() => {
          const res = setDemo()

          action('设置时间节点')(res)
        }}
      >
        设置时间节点
      </div>
    </div>
  )
}

export default TimerDemo
