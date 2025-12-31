import { action } from 'storybook/actions'
import '../../../.css/index.css'
import normalDemo from './normalDemo'

const canJumpDemo = () => {
  return (
    <div>
      <div
        className="storybook-button storybook-button-gap"
        onClick={() => {
          const res = normalDemo()
          action('跳跃游戏')(res)
        }}
      >
        跳跃游戏测试
      </div>
    </div>
  )
}

export default canJumpDemo
