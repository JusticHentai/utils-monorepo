import { action } from 'storybook/actions'
import '../../../.css/index.css'
import normalDemo from './normalDemo'

const coinChangeDemo = () => {
  return (
    <div>
      <div
        className="storybook-button storybook-button-gap"
        onClick={() => {
          const res = normalDemo()
          action('零钱兑换')(res)
        }}
      >
        零钱兑换测试
      </div>
    </div>
  )
}

export default coinChangeDemo
