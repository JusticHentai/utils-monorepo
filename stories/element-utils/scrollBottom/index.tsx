import { action } from 'storybook/actions'
import '../../.css/index.css'
import basicDemo from './basicDemo'
import thresholdDemo from './thresholdDemo'

const ScrollBottomDemo = () => {
  return (
    <div>
      <div
        className="storybook-button storybook-button-gap"
        onClick={() => {
          const res = basicDemo()
          action('添加滚动监听')(res.message)
        }}
      >
        添加滚动监听
      </div>
      <div
        className="storybook-button storybook-button-gap"
        onClick={() => {
          const res = thresholdDemo()
          action('添加滚动监听（带阈值）')(res.message)
        }}
      >
        添加滚动监听（阈值 50px）
      </div>
    </div>
  )
}

export default ScrollBottomDemo
