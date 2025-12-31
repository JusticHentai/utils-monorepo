import { action } from 'storybook/actions'
import '../../../.css/index.css'
import normalDemo from './normalDemo'

const maxSubArrayDemo = () => {
  return (
    <div>
      <div
        className="storybook-button storybook-button-gap"
        onClick={() => {
          const res = normalDemo()
          action('最大子数组和')(res)
        }}
      >
        最大子数组和测试
      </div>
    </div>
  )
}

export default maxSubArrayDemo
